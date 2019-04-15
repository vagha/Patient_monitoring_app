// Load the module dependencies
const User = require('mongoose').model('User');

// Lists all the patients.
exports.listPatients = function (req, res) {
    User.find({ usertype: { $ne: "nurse" } }).sort({ firstName: 1, lastName: 1 }).exec((err, patients) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(patients);
        }
    });
}