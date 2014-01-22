var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res){
	res.render('buttapi.html');
//	res.send('ButtAPI under development, check back soon');
});
app.get('/stinks/:name', function(req, res){
	res.send(req.params.name +' stinks like a butt.');
});
app.get('/suy/:name/:object', function(req,res){
	res.send('Stick a '+req.params.object+' up your butt '+req.params.name+'.');
});
app.get('/iuy/:name/:object', function(req, res){
	res.send('Is your '+req.params.object+' up your butt '+req.params.name+'?');
});
app.get('/isa/:name', function(req, res){
	res.send(req.params.name+' is a butt.')
});
app.listen(8081);
