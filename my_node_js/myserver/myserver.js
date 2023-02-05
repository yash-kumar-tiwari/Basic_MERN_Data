// first server

import * as http from 'http';

var server = http.createServer((req, res)=>{
    res.write("<h1>This is My server </h1>");
    res.end();
});

server.listen(8081,(err)=>{
    if(err)
    console.log(err);
    else
    console.log("Server Initiated at Port 8081");
})