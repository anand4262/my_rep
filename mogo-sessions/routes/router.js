var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/', function(req, res){
    res.sendFile(__dirname +'/views/index.html');
});

router.post('/', function(req, res, next){
// This is to confirm password == passwordConf
if(req.body.password != req.body.passwordConf){
var err = new Error('Password Do Not Match');
err.status = 400;
res.send('Password Do Not Match') ;
next(err);
}
if(req.body.email && req.body.username && req.body.password && req.body.passwordConf){
    var userData ={
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        passwordConf: req.body.passwordConf
    } 
    User.create(userData, function(err, user){
  if(err){
      throw err;
  }else{
      req.session.userID = user._id;
       return res.redirect('/admin');
  }
    })
}
});
router.get('/admin', function(req, res, next){
    if(req.session.userID){
        User.findById(req.session.userID).exec(function(err, user){
            if(err){
                next(err);
            }else{
                if(user == null){
                    var err = new Error('not authorized');
                    err.status = 400;
                    next(err);
                }else{
                    res.send('<h1>Hello ' + user.username + '</h1><a href="/logout">Logout</a>');
                }
            }
        });
    }
});
router.get('/logout', function(req, res, next){
    if(req.session){
    req.session.destroy(function(err){
        if(err){
            next(err);
        }else{
             res.redirect('/');
        }
    })
    }
})
module.exports = router;