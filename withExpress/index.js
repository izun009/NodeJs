var express = require('express'),
    PORT = process.env.PORT || 5050;
var app = express();

app.get('/', (req,res) => {

    res.send('Hello Izzun !!!');
});

app.get('/about', (req,res) => {
    res.send('Belajar NodeJS');
});

app.listen(PORT);
console.log('Running in port 5050...');
