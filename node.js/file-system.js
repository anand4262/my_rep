var fs = require('fs');
fs.readFile('demo.txt',function(err, data){
    if(err){
        throw err;
    }console.log(data.toString());
})
var data = fs.readFileSync('demo.txt','utf8');
console.log(data)
/*fs.writeFile('write.txt',"hello world", function(err, data){
    if(err){
        throw err;
    }console.log("task successfully completed")
})*/
fs.appendFile('write.txt',"hello mahesh", function(err, data){
    if(err){
        throw err;
    }console.log("task successfully completed")
})