const users = require('../controllers/user.server.controller');
const symptoms = require('../controllers/patient-symptoms.server.controler');
//
module.exports = function (app) {
    app.route('/api/diseases').post(users.requiresLogin, symptoms.getDiseases);
};
