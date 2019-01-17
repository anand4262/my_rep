var http = require('http');
var server = http.createServer(function(req, res){
    //handle incoming reqursts
    if(req.url == '/'){
    res.write(`This is demo page`);
    res.end(); 
    }
    else if(req.url == '/users'){
        res.writeHead(200, {"Content-Type":"text/html"})
        res.write(`<h1>This is user page</h1>`);
        res.end(); 
        }
    else if(req.url == '/admin'){
            res.write(`This is admin page`);
            res.end(); 
            }
    else if(req.url == '/data'){
        res.writeHead(200, {"Content-Type":"application/json"});
        res.write(JSON.stringify({"message":"hello world"}));
        res.end();
    }
    else{
                res.write("invalid request");
                res.end();
            }
});
server.listen(5000);
console.log("node web server is running at port 5000")