const http = require("http");


mymethod = function(res){
    var data="yournOTP for this payment : ";
    var rno = Math.random()*10000;
    data=data+rno;
    console.log(data);
    res.on('end',function(){
     this.mymethod;
    });
 };

http.createServer(function(req,res){
mymethod(res);
res.end()
}).listen(5050)
console.log("loading")