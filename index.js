

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser'); //cannot use dash in variable names
var server = express();

var port = process.env.PORT || 3000;

//plugins middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());

//test route
server.get('/', function(req, res){
  res.send('hello');
});

//listen
server.listen(port, function(){
  console.log('Now running on port..  ', port);
});
