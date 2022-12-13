
const http = require("http")
const route = require("./docum")

http.createServer(route).listen(3000)