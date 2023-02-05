// server with reduced code


import * as http from 'http';

http.createServer((req, res)=>{
    res.write("<h1>This is My server </h1>");
    res.end();
}).listen(8081);

console.log("Server Initiated at Port 8081");
