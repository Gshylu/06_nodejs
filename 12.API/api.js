const http = require("http");
const fs = require("fs");

const server =http.createServer((req,res)=>{
   
   const data = fs.readFileSync("./user.json","utf-8");
   const objData = JSON.parse(data);

   if(req.url == "/"){
   res.end("<h1>hello from the other side</h1>");
    }
    else if(req.url == "/about"){
    res.end("<h1>hello form the aboutus side<h1>");
    }
    else if (req.url == "/contact"){
    res.end("<h1>hello form the contactus side<h1>");
    }
    else if (req.url == "/API"){
   /* fs.readFile("./user.json","utf-8",(err,data)=>{
        console.log(data);
        const objData = JSON.parse(data);*/
        res.writeHead(200, {"content-type" :"application/json"});
        res.end(objData.name);
       // res.end(data); 
    }
   
    else{
        res.writeHead(404, {"content-type" :" text/html"});
        res.end("<h1>404 error ; pages does not exit</h1>")
    }
}); //${} template literals

server.listen(8000,"127.0.0.1",()=> {
    console.log("<h1>listening to the port no 8000</h1>");
});
