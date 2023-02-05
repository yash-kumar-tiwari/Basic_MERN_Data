// server http function fetching

import * as http from 'http';

http.createServer((req,res)=>{
    console.log(req);
    console.log("Path:"+req.url);
    console.log("Method:"+req.method);
    // res.write("<h1>Server Url & Method chk</h1>");
    res.end();
}).listen(8081);

console.log("Server Started at Given Port for Fetching 8081");
