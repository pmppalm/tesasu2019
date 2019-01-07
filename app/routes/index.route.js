module.exports = function (app) {
    var index = require('../controllers/index.controller');
    //app.route('/')
    //  .get(index.render);

    app.route('/json')
        .get(index.getJSON)
        .post(index.postJSON);

    app.route('/read/get')
        .get(index.readGET);

    app.route('/read/post')
        .get(index.readPOST);

    app.route('/team')
        .get(index.getQuery);

    app.route('/team/:id')
        .get(index.getParams);

    app.route('/api/create')
        .get(index.create);

    app.route('/api/read')
        .get(index.read);

    app.route('/api/read/:id')
        .get(index.readById);

    app.route('/api/update/:id')
        .get(index.updateById);

    app.route('/api/delete/:id')
        .get(index.deleteById);

    app.route('/allTempSensor')
        .get(index.read2);

    app.route('/api/deleteall')
        .get(index.deleteAll);

    app.route('/api/create2')
        .get(index.create2);

    app.route('/allTempSensor/:id')
        .get(index.readById2);

    app.route('/tempSensor/:val')
        .post(index.readpost);

    app.route('/')
        .get(index.home);


    app.route('/readbody')
        .get(index.readbody);

    app.route('/test')
        .put(index.getvalues);
};
