const fs = require("fs");
//creating a new file
//fs.writeFileSync("read.text","any text you want to add");

// it will overriden the previous file
//fs.writeFileSync("read.text","another  text you want to add");

// if you want add any extra text then
//fs.appendFileSync("read.text","<p> some extra text </p>");


// to read any data
const buf_data =fs.readFileSync("read.text");
//console.log(buf_data);
org_data = buf_data.toString();
console.log(org_data);*/

/* output <Buffer 61 6e 6f 74 68 65 72 20 20 74 65 78 74 20 79 6f 75 20 77 61
 6e 74 20 74 6f 20 61 64 64 3c 70 3e 20 73 6f 6d 65 20 65 78 74 72 61 20 74 65 78 74 20 3c ... 3 more bytes>*/

// node.js include an additional data type called buffer
// (not available in browser's javascript)
// buffer is mainly used to store binary data,
// while reading from a file receving packets over the network



// to rename the file

 fs.renameSync("read.text","readwrite.text");