var express= require('express');
var session =require('express-session');
var bodyParser =require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: 'A@#$%M@#$%P',
    saveUninitialized: true,
    resave: false
}));

var sess;
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html')
});
app.post('/login', function(req, res){
    sess = req.session;
    if(req.body.username == "admin" && req.body.password == "admin"){
           sess.userDetail = req.body.username;
          
    } 
    res.redirect('/redirects');
});
app.get('/redirects', function(req, res){
    
    sess = req.session;
    if(sess.userDetail){
        res.redirect('/admin');
    }
    else{
        res.write('<h1>Please enter correct details</h1>')
        res.end('<a href=' + '/' + '>Login</a>')
    }
})
app.get('/admin', function(req, res){
    sess = req.session;
    if(sess.userDetail){
        res.write('<h1>Hello '+ sess.userDetail + '</h1><br/>')
        res.end('<a href='+ '/logout' + '>Logout</a>')
    }
    else{
        res.write('<h1>Please Login First!!</h1>')
        res.end('<a href=' + '/' + '>Login</a>')
    }
    
});
app.get('/logout', function(req, res){
    req.session.destroy(function(err){
        if(err){
            console.log(err)
        }else{
            res.redirect('/');
        }
    })
})
app.listen(5000, function(req, res){
    console.log('Connected to port 5000');
    //res.close();
}) 