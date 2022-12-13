const http = require("http");

/*
var options = {
    host :"www.mycode.org",
    path:"/getOTP",
};

//when this req url executed
mymethod = function(res){
   var data="yournOTP for this payment : ";
   var rno = Math.random()*10000;
   data=data+rno;
   console.log(data);
   res.on('end',function(){
    this.mymethod;
   });
};

http.request(options,mymethod).end();
*/

http.request("http://localhost:5500").end();

// here we can call anthoer page or url by request method
// here we are requesting the reqServer.js  for otp

