//user registration
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true   
    },
    passConf:{
        type: String,
        require: true 
    }
});
var User = mongoose.model('User', userSchema);
module.exports = User;