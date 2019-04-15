const users = require('../../app/controllers/user.server.controller');
const dailyTips = require('../../app/controllers/daily-tips.server.controller');
//
module.exports = function (app) {
    app.route('/api/daily-tips').post(users.requiresLogin, dailyTips.create);
    app.route('/api/daily-tips/:patientId').get(users.requiresLogin, dailyTips.list);
};
