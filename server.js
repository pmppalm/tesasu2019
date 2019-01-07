var express = require('express');
var app = express();
var bodyparser = require('body-parser');
require('./app/models/index.model');
require('./app/models/index.model2');
require('./app/routes/index.route')(app);

var mongoose = require('mongoose');
var uri = 'mongodb://heroku_jvp8kncs:tloup834159i629f624onibgbn@ds117101.mlab.com:17101/heroku_jvp8kncs';
var db = mongoose.connect(uri, { useNewUrlParser: true });

app.use(bodyparser.json());
app.set('views', './app/views/');
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;
app.listen(port);
module.exports = app;

console.log('Server running...');


