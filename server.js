'use strict';

var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});

app.get('/', function (req, res) {
    res.send('Hello you! <a href="hello">Click here to go to the /hello page</a>');
});

app.get('/hello', function (req, res) {
    res.send('Hello World <a href="hello.txt">Click here to display the hello.txt file</a>');
});

app.get('/hello.txt', function (req, res) {
    var body = 'Hello World';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
});

app.listen(8080);
console.log('Listening on port 8080');