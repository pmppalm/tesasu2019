var express = require('express');
var app = express();
var bodyparser = require('body-parser');
require('./app/models/index.model');
require('./app/models/index.model2');
require('./app/routes/index.route')(app);

var mongoose = require('mongoose');
var uri = 'mongodb://localhost/tesa2019';
var db = mongoose.connect(uri, { useNewUrlParser: true });

app.use(bodyparser.json());
app.set('views', './app/views/');
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;
app.listen(port);
module.exports = app;

console.log('Server running...');


