const http = require("http");
const fs = require("fs");

http.createServer(function(req,res){

 var Url = req.url;
 console.log(Url)
if(Url === "/"){
 res.write('<html><head></head><body><form action="/login" method="POST"><input type="text" value="Username"/><input type="submit"/></form></body></html>')
 return res.end();
}
else if(Url = "/login"){
    
    fs.writeFileSync("message" , "new style" )
    res.statusCode = 302;
    res.setHeader("Location" , "/")
    res.write("your input is recieved")
    return res.end()
  
}
 

}).listen(3000)

console.log("loading")
