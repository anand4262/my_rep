var express   = require('express');
var router    = express.Router();
var jwt       = require('jsonwebtoken');
var User      = require('./models/user');

router.post('/signup', function(req, res){
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });
    user.save(function(err, data){
        if(err){
            console.log(err);
        }else{
            res.send('The Data has been Posted Successfully');
        }
    })
});

module.exports = router;