const fs = require('fs');

fs.writeFileSync("bio.txt","any data");
fs.appendFileSync("bio.txt","<another data>>");

fs.renameSync("bio.txt","mybio.txt");
const Any_data = fs.readFileSync("mybio.txt","utf8");
console.log(Any_data);
//fs.unlinkSync("file/mybio.txt"); //to delet the file
//fs.rmdirSync("file.js"); // to delet the folder.


//CURD create update read delete opertion
