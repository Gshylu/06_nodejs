const path = require("path");

//console.log(path.dirname('G:/nodejs/3.path/path.js'));
//console.log(path.extname('G:/nodejs/3.path/path.js'));
//console.log(path.basename('G:/nodejs/3.path/path.js'));
//console.log(path.parse('G:/nodejs/3.path/path.js'));
const mypath = path.parse('G:/nodejs/3.path/path.js');
console.log(mypath.name);
console.log(mypath.root);