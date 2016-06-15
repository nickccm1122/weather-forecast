var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5000;

app.use(morgan('dev'));
// make express look in the dist directory for assets (css/js/img)
app.use(express.static(__dirname + '/dist'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index.html');
});

app.listen(port, function() {
    // console.log('Our app is running on http://localhost:' + port);
});