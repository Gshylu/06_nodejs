const  fs = require('fs');
const http = require('http');


http.createServer((req,res) =>{
    const url =req.url;
    const method = req.method;
    if(url === '/login' && method === 'POST'){
        const body = [];
        req.on('data' , (chuck) => {
            console.log(chuck);
            body.push(chuck);
        });
        req.on('end' , () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const login = parsedBody.split('=')[1];
            console.log(login)
            fs.writeFileSync('login.txt' , login) // //>>it will result input value
           /* const login = parsedBody.split('=')[0];
            console.log(login) 
            fs.writeFileSync('login.txt' , login);*/ //>>it will result only name = Username
        });
        res.statusCode = 302;
        res.setHeader("Location" , "/");
        return res.end();
    }
}).listen(3000)
console.log('loading')