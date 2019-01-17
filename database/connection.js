var mongoose = require('mongoose');
var options= {
    user: 'admin',
    pass: 'Mahesh@1998'
}
mongoose.connect('mongodb://localhost/ecommerced',options );
var db = mongoose.connection;
db.on('open', function(){
    console.log('we are connected')
},{ useNewUrlParser: true })
db.on('error', function(err){
    //console.log('There is some error')
    throw err;
})
db.close();