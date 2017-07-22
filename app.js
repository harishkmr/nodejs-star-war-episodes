var express = require("express");

var app = express();

app.set('view engine','ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('/episodes', routes.episodes);

app.get('/episode/:episode_number?', routes.episode);

app.get('/*', routes.notFound);

app.listen(3000, function(){
	console.log("Node JS application is running on localhost:3000");
})