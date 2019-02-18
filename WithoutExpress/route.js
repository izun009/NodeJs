var fs = require('fs');
var url = require('url');
var date = new Date();

function FileGue(namaFile, res){
    res.writeHeader(200,{
        'Connection':'Close',
        'Content-Type':'text/html',
        'Date' : date, 
        'Pesan-Header':'Pengenalan Node.js'
    });
    //fungsi bawaan fs.readfile
    //data disini adalah nama lain dari parameter res untuk fs
    fs.readFile(namaFile,(Error,data) => {
        if(Error){
            res.writeHeader(404);
            res.write('File Not Found');
        }else{
            res.write(data)
        }
        res.end();
    });
}

var moduleBuatan = (req,res) => {
    res.writeHeader(200,{
        'Connection':'Close',
        'Content-Type':'text/html',
        'Date' : date, 
        'Pesan-Header':'Pengenalan Node.js'
    });

    var path = url.parse(req.url).pathname;
    switch(path){
        case '/':
            FileGue('./index.html',res);
            break;
        case '/user':
            FileGue('./user.html',res);
            break;
        default:
    }
}

module.exports = {
    moduleBuatan
}