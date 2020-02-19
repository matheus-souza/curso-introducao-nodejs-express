module.exports = () => {
    var express = require('express');

    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    require('../app/routes/web')(app);

    app.listen(8000, () => {
        console.log('locahost:8000');
    });
};