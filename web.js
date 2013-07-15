var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var index = fs.readFileSync('index.html');

var indexString = index.toString('utf-8');

app.get('/', function(request, response) {
  response.send(indexString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
