var express = require('express');
var mongoose = require('mongoose');
//pulls info from HTML POST
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
// fetching database
var Brand = require('./models/brands');
//parse information using form
// app.use(bodyParser.urlencoded({ 'extended': true}));
// parse application/json
app.use(bodyParser.json());

var options = {
    user: 'admin',
    pass: 'Mahesh@1998'
};
mongoose.connect('mongodb://localhost/ecommercedb', options);
var db = mongoose.connection;
db.on('open', function(){
    console.log('we are connected')
},{ useNewUrlParser: true })
db.on('error', function(err){
    //console.log('There is some error')
    throw err;
})
//db.close();

app.get('/', function(req, res){
    res.send('welcome to the Admin Panel buckle up!!');
   
})
app.get('/api/brands', function(req, res){
     Brand.find(function(err, data){
        if(err){
            throw err;
        }
        else{
            res.json(data);
        }
    })
   });
   app.get('/api/brands/:id', function(req, res){
       Brand.findById(req.params.id, function(err, data){
        if(err){
            throw err;
        }
        else{
            res.json(data);
        }
       })
   });
   app.post('/api/brands', function(req, res){
         /* var brand = {
              name = req.body.name,
              desc = req.body.name
          }*/
          Brand.create(req.body, function(err, data){
         if(err){
             throw err;
         }else{
             console.log('Document posted successfully');
               res.json(data);
         }
          })
   });
   app.put('/api/brands/:id', function(req, res){
 Brand.findByIdAndUpdate(req.params.id, req.body, function(err, data){
if(err){
    throw err;
}else{
    res.json(data);
}
 })
   });
   app.delete('/api/brands/:id', function(req, res){
       var query = {
           _id: req.params.id
       }
       Brand.remove(query, function(err, data){
          if(err){
              throw err;
          }
          else{
              res.json(data);
          }
       })
   });
app.listen(3000, function(req, res){
    console.log('server is running at port 3000...');
     //res.end();
});
