module.exports = () => {
    var express = require('express');
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');

    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(expressValidator());

    require('../app/routes/web')(app);

    app.listen(8000, () => {
        console.log('locahost:8000');
    });
};