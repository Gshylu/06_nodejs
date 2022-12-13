// json = java script object notation .
//it is a light weight format for storing and transporting data
//json is often  used when data is sent from a server to web page


const fs = require("fs");

const Details = {
    name : "shylu",
    age : 22,
    city : "hyderabad",
};
//console.log(Details.age);

// to convert the object into json

const jsonData =JSON.stringify(Details);
//console.log(jsonData) // json format
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done")
});

fs.readFile("json1.json","utf8",(err,data)=>{
console.log(data);
});

fs.readFile("json1.json","utf8",(err,data)=>{
const objData = JSON.parse(data);
console.log(objData);
});
//console.log(objData);//object format


/*API is the acronym for Application Programming Interface,  which is a software intermediary
that allows two applications to talk to each other. Each time you use an app like FAcebook 
send an instant message or check wheather on your the phone, you'er using an API (which gives the information of sevice )*/