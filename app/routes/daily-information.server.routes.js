const users = require('../../app/controllers/user.server.controller');
const dailyInfo = require('../../app/controllers/daily-information.server.controller');
//
module.exports = function (app) {
    app.route('/api/daily-info').post(users.requiresLogin, dailyInfo.create);
    app.route('/api/daily-info/:patientId').get(users.requiresLogin, dailyInfo.list);
};
