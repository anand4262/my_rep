var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
global.config = require('./configurations/config');
var jwt       = require('jsonwebtoken');
var User      = require('../models/user');

var app = express();
// Database Connection
var options={
    user: 'admin',
    pass: 'Mahesh@1998'
};
mongoose.connect('mongodb://localhost/ecommercedb', options);
var db = mongoose.connection;
// usage
app.use(bodyParser.json());
app.use(require('./controllers'));

app.listen('/', function(req, res){
    res.send('Hello World');
});
app.listen(3000, function(req, res){
    console.log('Running at 3000')
})
