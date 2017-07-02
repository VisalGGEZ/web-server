var express = require('express');
var PORT = 3000;
var app = express();

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
	
		next();
	},
	logger: function (req, res, next) {
		console.log('Request ' + req.method + ' ' + req.originalUrl + new Date().toString());
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About page');
})

app.use(express.static(__dirname));

app.listen(PORT, function(){
	console.log('Server started on port: ' + PORT);
});