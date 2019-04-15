// Load the module dependencies
const user = require('../controllers/user.server.controller');
const passport = require('passport');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'signup' routes 
    app.route('/api/auth/signup').post(user.signup);

    // Set up the 'signin' routes 
    app.route('/api/auth/signin').post(user.signin);

    // Set up the 'signout' route
    app.route('/api/auth/signout').post(user.signout);
};