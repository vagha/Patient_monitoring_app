// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000


// Create a new Mongoose connection instance
const db = configureMongoose();

// Create a new Express application instance
const app = configureExpress();

// Configure the Passport middleware
const passport = configurePassport();

// Use the Express application instance to listen to the '3000' port
//app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');



express()
  .use('/', express.static(path.resolve('./public')))
  .set('views', './app/views')
   .set('view engine', 'ejs')
   .get('/', (req, res) => res.render('index.ejs'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;
