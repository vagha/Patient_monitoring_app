const users = require('../controllers/user.server.controller');
const emergencyMailer = require('../controllers/patient-alert-mailer.server.controller');
//
module.exports = function (app) {
    app.route('/api/alert').post(users.requiresLogin, emergencyMailer.sendMail);
};
