var http = require('http'),
    PORT = 5000;

var date = new Date();
var server = http.createServer((req,res) => {
    res.writeHead(200,{
        'Connection':'Close',
        'Content-Type':'text/html',
        'Date' : date, 
        'Pesan-Header':'Pengenalan Node.js'
    })
    res.write('Belajar NodeJS');
    res.end();
});
server.listen(PORT);
console.log('Server Running in Port 3030');