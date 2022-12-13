const http = require("http");
//const url = require("url");

const server = http.createServer((req,res)=>{
   // console.log(req.url);
   if(req.url == "/"){
   res.end("<h1>hello from the other side</h1>");
    }else if(req.url == "/about"){
    res.end("<h1>hello form the aboutus side<h1>");
    }
    else if (req.url == "/contact"){
    res.end("<h1>hello form the contactus side<h1>");
    }
    else{
        res.writeHead(404, {"content-type" :" text/html"});
        res.end("<h1>404 error ; pages does not exit</h1>")
    }
});

server.listen(8000,"127.0.0.1",()=> {
    console.log("<h1>listening to the port no 8000</h1>");
});
/*HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

Informational responses (100–199)
Successful responses (200–299)
Redirection messages (300–399)
Client error responses (400–499)
Server error responses (500–599) */





