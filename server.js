const path = require('path'),
	express = require('express');
	app = express(),
	cool = require('cool-ascii-faces');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  	response.render('public/index')
});

app.get('/cool', function(request, response) {
  	response.send(cool());
});

app.listen(3000, function () {
  	console.log('Example app listening on port 3000!');
});