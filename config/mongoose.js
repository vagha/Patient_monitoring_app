// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    const db = mongoose.connect(config.db, {
        useNewUrlParser: true,
        useCreateIndex: true
    });

    // Load the 'User' model
    require('../app/models/user.server.model');
    require('../app/models/vital-signs.server.model');
    require('../app/models/daily-tips.server.model');
    require('../app/models/daily-information.server.model');

    // Return the Mongoose connection instance
    return db;
};