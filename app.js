var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('site/home');
});

app.get('/contato', (req, res) => {
    res.render('site/contato');
});

app.listen(8000, () => {
    console.log('locahost:8000');
});