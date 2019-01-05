var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Temperature = new Schema({
    sensID: {
        type: String,
        require: true
    },
    val: {
        type: Number,
        require: true
    },
    date: {
        type: String,
        require: true
    }
});

mongoose.model('Temp', Temperature);

