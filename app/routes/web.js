var clienteModel = require('../models/ClienteModel')();

module.exports = (app) => {
    app.get('/', (req, res) => {
        clienteModel.all((err, result) => {
            res.render('site/home', {clientes: result});
        });
    });

    app.get('/contato', (req, res) => {
        console.log('');
        res.render('site/contato');
    });
};