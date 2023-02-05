// server file for checking if preoccupied port reassigned or not 

import * as http from 'http';

var server = http.createServer((req, res)=>{
    res.write("This is Server Type 2 with Modification in implementation");
    res.end();
}).listen(8081);

console.log("Server Started at given port ");