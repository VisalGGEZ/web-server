var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();

var middleware = require('./middleware.js')

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About page');
})

app.use(express.static(__dirname));

app.listen(PORT, function(){
	console.log('Server started on port: ' + PORT);
});