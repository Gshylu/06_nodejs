const http = require("http");
const port = 5500;

http.createServer(function(req,res){
    var msg = "hello node.js" ;
    res.write(msg);
    res.on("data",data=>{msg=msg+data});
    console.log(req.url);
    res.statusCode=201;
    res.write("your request processed");
    
    //should be handled by expressjs web-framework
    res.end();
}).listen(port)
console.log(`loading ${port}`)