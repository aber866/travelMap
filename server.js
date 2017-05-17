const path = require('path'),
	express = require('express');
	app = express(),
	cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  	response.render('public/index')
});

app.get('/cool', function(request, response) {
  	response.send(cool());
});

app.listen(app.get('port'), function() {
  	console.log('Node app is running on port', app.get('port'));
});