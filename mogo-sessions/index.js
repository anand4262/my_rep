var express = require('express');
var mongoose = require('mongoose'); // used to connect to the database
var bodyParser = require('body-parser'); // used to convert data to json format or read data in json format
var sessions = require('express-session'); // used to create sessions 
var mongoStore = require('connect-mongo')(sessions); // used to store session data in mongoDB
var bcrypt = require('bcrypt-nodejs'); // used to hash the passwords(encryption)
var style =require('style-loader');
var css = require('css-loader');
var app = express();

var options = {
    user: 'admin',
    pass: 'Mahesh@1998'
}
mongoose.connect('mongodb://localhost/ecommercedb', options);
var db = mongoose.connection; 
// handling error
db.once('error', console.error.bind(console, "connection error:"));
//checking connection
db.once('once', function(){
    console.log("we are connected to database")
})

// use sessions to track logins
app.use(sessions({
    secret: 'M!@#$A!@#$',
    resave: true,
    saveUninitialized: false,
    store: new mongoStore({
        mongooseConnection: db
    })
}));
// middlewares for paesing requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// helps to get static file from template
app.use(express.static(__dirname+ '/views/'));

//routes
var routes = require('./routes/router');
app.use('/', routes);


app.listen(5000, function(req, res){
    console.log('server connected');
    
})
