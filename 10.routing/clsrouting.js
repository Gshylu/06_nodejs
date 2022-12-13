
const http = require("http");
const fs = require("fs");

http.createServer(function(req,res){
    var _url = req.url;
    if(_url==="/"){
        res.write('<html>')
        res.write('<head><title>node.js</title></head>');
        res.write('<body><form action="/user" method="post"> <label>First Name</label><input type="text" id="fname" placeholder="Enter your fname" required><br><br><label>Last  Name</label> <input type="text" placeholder="Enter your Lname" id="lname" required ><br><br><button type="submit">ADD</button></form></body>');       
        res.write('<html>');
        return res.end();  
    }else if(_url === "/user")
    {   
       fs.writeFileSync("read.text","Any data")
       res.statuscode = 302;
       res.setHeader("location","/");
       return res.end();
    }


}).listen(5050);
console.log("Server started Listening to port no 8000")

