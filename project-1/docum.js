const fs = require('fs')

const handleUser = (req,res)=>{
    const url = req.url
    const method = req.method
    if(url === "/"){
        res.setHeader("Content-Type" , "text/html")
        res.write('<html>')
        res.write('<head><title>node.js</title></head>');
        res.write('<body><form action="/createUser" method="post"> <label>First Name</label><input type="text" id="fname" placeholder="Enter your fname" required><br><br><label>Last  Name</label> <input type="text" placeholder="Enter your Lname" id="lname" required ><br><br><button type="submit">ADD</button></form></body>');       
        res.write('<html>')
        res.end();
    }else if(url === "/createUser" && method === "POST"){
        const buffer = []
        req.on('data',(chunk) =>{
            buffer.push(chunk)
            console.log(chunk);
        })
        req.on("end",()=>{
            console.log(buffer);
            var uname = Buffer.concat(buffer).toString().split("=")[1]
            console.log(uname);
            fs.appendFile("./userList.text", uname+"\n",(err)=>{
                res.statusCode = 302
                res.setHeader("Location","/users")
                res.end()
            })
        })
    }else if(url === "/users"){
        fs.readFile("./userList.txt",utf-8,(err ,data)=>{
            var users = data.split('\n')
            res.serHeader("Content-Type" , "text/html");
            res.write("<html>")
            res.write("<body>")
            res.write("<ol>")
            for(i of users){
                res.write('<li>${i}</li>')
            }
            res.write("<ol>")
            res.write("</body></html>")
            res.end()
        })
    }
};

module.exports = handleUser