var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.get('/user', function(req, res){
    res.sendFile(__dirname + '/index.html');
})
app.post('/submit-data', function(req, res){
    var name = req.body.firstName + ''+req.body.lastName;
    res.send("welcome: "+name+'!!');l
    //res.send('<h2>Post Request</h2>');
})
/*app.put('/user', function(req, res){
    res.send('Put Request');
})
app.delete('/user', function(req, res){
    res.send('Delete Request');
})
*/
//defining route
var server = app.listen(5000, function(){
    console.log('the node server is created');
})