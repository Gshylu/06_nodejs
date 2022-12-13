
const http = require("http");
const  fs = require("fs");

http.createServer((req,res)=>{
    const url =req.url;
    const method =req.method;
    //on is the generic method with javascript
    if(url === "/user" && method ==="POST"){
        const body = [];
        req.on("data"  , (chunk)=>{
            console.log(chunk);
            body.push (chunk);   
        })
        req.on("end",()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const read = parsedBody.split("=")[1];
             fs.writeFileSync("read.txt" ,read);
             
           
        
        });
        
        res.statusCode = 302;
        res.setHeader("location","/user");
        return res.end();
     
    }
}).listen(8008);
console.log("server is listening to 8008");
