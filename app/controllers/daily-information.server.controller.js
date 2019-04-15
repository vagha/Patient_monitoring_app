const mongoose = require('mongoose');
const DailyInfo = mongoose.model('DailyInfo');
const ObjectId = mongoose.Types.ObjectId;
//
function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};
//
exports.create = function (req, res) {
    const dailyInfo = new DailyInfo(req.body);
    dailyInfo.patient = new ObjectId(req.body.patient);
    dailyInfo.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(dailyInfo);
        }
    });
};
//
exports.list = function (req, res) {
    const patientId = req.params.patientId ? req.params.patientId : "0";

    DailyInfo.find({ patient: new ObjectId(patientId) }).sort('-created').limit(10).exec((err, dailyTips) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(dailyTips);
        }
    });
};
