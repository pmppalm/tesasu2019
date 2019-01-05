exports.render = function (req, res) {
    res.send('Hello Silpakorn');
};
exports.getJSON = function (req, res) {
    var person = { name: "John", age: 31, city: "New York" };
    res.json(person);
};

exports.postJSON = function (req, res) {
    var person = { name: "Smith", age: 28, city: "Washington" };
    res.json(person);
};

var request = require('request');
exports.readGET = function (req, res) {
    var url = 'http://localhost:3000/json';
    request({
        headers: { 'content-type': 'application/json' },
        url: url,
        method: 'GET'
    }, function (error, response, body) {
        res.send(body);
    });
};

exports.readPOST = function (req, res) {
    var url = 'http://localhost:3000/json';
    request({
        headers: { 'content-type': 'application/json' },
        url: url,
        method: 'POST'
    }, function (error, response, body) {
        res.send(body);
    });
};

exports.getQuery = function (req, res) {
    var id = req.query.id;
    res.send(id);
};

exports.getParams = function (req, res) {
    var id = req.params.id;
    res.send(id);
};

var User = require('mongoose').model('User');
exports.create = function (req, res) {
    var user = new User();
    user.name = "Gun";
    user.age = 22;
    user.city = "Thailand";



    user.save(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(user);
        }
    });

};

exports.read = function (req, res) {
    User.find({}).exec(function (err, users) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.json(users);
        }
    });
};

exports.readById = function (req, res) {
    User.find({ _id: req.params.id }).exec(function (err, user) {
        if (err) {
            console.log("Error:", err);
        }

        else {
            res.json(user);
        }
    });
}

exports.updateById = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {
        $set: {
            name: "GUN2",
            age: "21",
            city: "Tokyo"
        }
    },
        {
            new: true
        }, function (err, user) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(user);
            }
        });
};

exports.deleteById = function (req, res) {
    User.remove({ _id: req.params.id }, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.send("User deleted!");
        }
    });
};
//////////////////////////////////////////////////////////////////////////////////////////////
var Temp = require('mongoose').model('Temp');
exports.create2 = function (req, res) {
    var user2 = new Temp();
    user2.sensID = "10";
    user2.val = 20;
    user2.date = '06:02:2019-18:28';

    user2.save(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(user2);
        }
    });
};

exports.read2 = function (req, res) {
    Temp.find({}).exec(function (err, users) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.json(users);
        }
    });
};

exports.deleteAll = function (req, res) {
    Temp.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.send("User All deleted!");
        }
    });
};
exports.readById2 = function (req, res) {
    Temp.find({ _id: req.params.id }).exec(function (err, user) {
        if (err) {
            console.log("Error:", err);
        }

        else {
            res.json(user);
        }
    });
}

exports.readpost = function (req, res) {
    Temp.find({ val: { $gt: 0, $lt: req.params.val } }).exec(function (err, users) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.json(users);
        }
    });
};

exports.home = function (req, res) {
    var str = "MUZIC •";
    res.render('index', {
       str: str 
    });
};