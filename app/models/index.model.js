var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserShema = new Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    city: {
        type: String,
        require: true
    }
});

mongoose.model('User', UserShema);
