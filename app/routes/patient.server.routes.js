// Load the module dependencies
const user = require('../controllers/user.server.controller');
const patient = require('../controllers/patient.server.controller');

// Define the routes module' method
module.exports = function (app) {
    // Retrieves the list of all users which are patients.
    app.route('/api/patient').get(patient.listPatients);
}