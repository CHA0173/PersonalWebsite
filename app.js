const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs')

app.use(express.static('public'));

app.get("/" , function(req, res){
  fs.createReadStream(__dirname + '/index.html').pipe(res);
});

app.get("/left-sidebar.html" , function(req, res){
  fs.createReadStream(__dirname + '/left-sidebar.html').pipe(res);
});

app.get("/no-sidebar.html" , function(req, res){
  fs.createReadStream(__dirname + '/no-sidebar.html').pipe(res);
});

app.get("/right-sidebar.html" , function(req, res){
  fs.createReadStream(__dirname + '/right-sidebar.html').pipe(res);
});
app.listen(8080);