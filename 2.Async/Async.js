const fs = require("fs");

fs.writeFile("read.txt", "to create new file of asynchormous", 
 // call back fynction
(err) => {
    console.log("completed");
    console.log(err); // check error
});

// we pass them a function as an argument --a callback
// that gets called when that task completes
// the callback has an argument that tells you whether
//the opertion completed successfully
//now we need to say what to do when fs.writefile has completed
//(even if it's nothing), and start checking for errors

fs.appendFile("read.txt","  any other data",
(err) =>{
    console.log("task completed");

});

fs.readFile("read.txt","utf-8",
(err,data)=>{
    console.log(data)
});

fs.rename("bio.txt","mybio.txt",
(err) =>{
    console.log("upadated");
    console.log(err);
});
