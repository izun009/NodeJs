var http = require('http'),
    PORT = 5000;
    
var route = require('./route');

var server = http.createServer(route.moduleBuatan);

server.listen(PORT);
console.log('Server Running in Port 5000');