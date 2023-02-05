// server with writehead

import * as http from'http';

http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type":"text/html"})
    res.write("<h1>Welcome to The World of NodeJS</h1>");
    res.write("<h2>This is the Server</h2>");
    res.end();
}).listen(8081);

console.log("Server initiated at 8081 port");