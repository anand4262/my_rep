// providing client to mongodb
var mongoClient = require('mongodb').MongoClient;
// url at which mongodb service is running
//var url= "mongodb://127.0.0.1:27017";
var url = "mongodb://admin:Mahesh%401998@127.0.0.1:27017/ecommercedb";
// to make connection to mondodb service
mongoClient.connect(url,{ useNewUrlParser: true },function(err, db){
    if(err) {
        throw err;
    }
console.log('MongoDB successfully connected.....,');
db.close();
})