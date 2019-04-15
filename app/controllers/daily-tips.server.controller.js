const mongoose = require('mongoose');
const DailyTips = mongoose.model('DailyTips');
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
    const dailyTips = new DailyTips(req.body);
    dailyTips.patient = new ObjectId(req.body.patient);
    dailyTips.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(dailyTips);
        }
    });
};
//
exports.list = function (req, res) {
    const patientId = req.params.patientId ? req.params.patientId : "0";

    DailyTips.find({ patient: new ObjectId(patientId) }).sort('-created').exec((err, dailyTips) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(dailyTips);
        }
    });
};
