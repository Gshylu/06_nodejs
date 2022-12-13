const os = require('os');

console.log(os.arch()); // to find the architeture
console.log(os.hostname()); // to find the owner
console.log(os.platform());//device which we are using
console.log(os.tmpdir()); // where temp files are stored
console.log(os.type()); // 






const freeMemory = os.freemem(); //for finding the memory
//console.log(freeMemory);// it shows in bytes
console.log(`${freeMemory/1024/1024/1024}`); // bytes / kilobytes / mega bytes/ giga bytes by divding by 1024

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);



