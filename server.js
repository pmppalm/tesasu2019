var express = require('express');
var app = express();
var bodyparser = require('body-parser');
require('./app/models/index.model');
require('./app/models/index.model2');
require('./app/routes/index.route')(app);

var mongoose = require('mongoose');
var uri = 'mongodb://heroku_dfqc2437:lr0uktbh3q1smnbgrfvje8fqa4@ds229118.mlab.com:29118/heroku_dfqc2437';
var db = mongoose.connect(uri, { useNewUrlParser: true });

app.use(bodyparser.json());
app.set('views', './app/views/');
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;
app.listen(port);
module.exports = app;

console.log('Server running...');


