// Requiring dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var nev = require('email-verification')(mongoose);
//var path = require('path');

var User = require('./app/models/user');

// REQUIRING CONFIG FILE
var config = require('./app/config/config.js');

// GETTING DATABASE URI
var DB_URI = config.DB_URI;

// Conecting to the Database.
mongoose.connect(DB_URI, function(err, db)
{
    if (!err) {
        console.log("We're Connected");
    } else {
        console.log("There is an Error");
    }
});

// INITIALIZING APP
var app = express();

// USING MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// REQUIRING ROUTES
var routes = require('./app/routes/routes.js');
var registerRoutes = require('./app/routes/register.js');

app.use(routes);
app.use(registerRoutes);

//Starting the server on port 8080
app.listen(8080, function()
{
    console.log('Server started in 8080');
});
