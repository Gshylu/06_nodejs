/*the http.createserver()method includes request and
response parameters which is supplied by Nide.js*

>>the request object can be used to get information about the  current
HTTP requset eg: url requset header,data.

>>the response object  can be used to send a response for a current HTTP requset

>> if the respons from the HTTP server is supposed to be displayed as HTML,
you should include an http header with the correct content type:

*/


const http = require("http");

const server =http.createServer((req,res)=>{
res.end("<h1>hello from the other side</h1>");
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});