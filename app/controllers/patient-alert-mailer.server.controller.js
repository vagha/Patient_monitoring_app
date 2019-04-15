const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const ObjectId = mongoose.Types.ObjectId;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'comp308emergency@gmail.com',
        pass: 'Comp308!@#Emergency'
    }
});
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
exports.sendMail = function (req, res) {
    const email = req.body.message;
    const user = req.body.user;
    const mailOptions = {
        from: 'comp308emergency@gmail.com',
        to: 'comp308emergency@gmail.com',
        subject: `Emergency Alert - ${user.fullName}`,
        html: `<p>${email}</p>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(info);
        }
    });
}
