const users = require('../../app/controllers/user.server.controller');
const vitalSigns = require('../../app/controllers/vital-signs.server.controller');
//
module.exports = function (app) {
    app.route('/api/vital-signs').post(users.requiresLogin, vitalSigns.create);
    app.route('/api/vital-signs/:patientId').get(users.requiresLogin, vitalSigns.list);
};
