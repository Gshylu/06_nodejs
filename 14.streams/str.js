 // 2nd way
 // reading form a stream
 // create a readable stream
 // handle stream events -> data , end , and error
 
 
 const fs = require("fs");
 const http = require("http");

 const server = http.createServer();

 server.on("request" , (req,res) =>{
   /* var fs = require("fs");
    fs.readFile("str.txt",(err,data)=>{
        if (err) return console.error(err);
        res.end(data.toString());
    });
 });
server.listen(8000,"127.0.0.1");*/


/*const rstream = fs.createReadStream("str.txt");

rstream.on("data",(chunkdata)=>{
    res.write(chunkdata);
});
rstream.on("end",()=>{
res.end();
});
rstream.on("end",()=>{
    console.log(err);
    res.end("file not found");
});

});

server.listen(8000,"127.0.0.1");*/

const rstream = fs.createReadStream("str.js");
rstream.pipe(res);
 });
 server.listen(8000,"127.0.0.1");