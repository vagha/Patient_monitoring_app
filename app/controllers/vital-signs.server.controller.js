const mongoose = require('mongoose');
const VitalSigns = mongoose.model('VitalSigns');
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
    const vitalSigns = new VitalSigns(req.body);
    vitalSigns.patient = new ObjectId(req.body.patient);
    vitalSigns.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(vitalSigns);
        }
    });
};
//
exports.list = function (req, res) {
    const patientId = req.params.patientId ? req.params.patientId : "0";

    VitalSigns.find({ patient: new ObjectId(patientId) }).sort('-created').exec((err, vitalSigns) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(vitalSigns);
        }
    });
};
