var clienteModel = require('../models/ClienteModel')();

module.exports = (app) => {
    app.get('/', (req, res) => {
        var listaClientes = clienteModel.all();
        res.render('site/home', {clientes: listaClientes});
    });

    app.get('/contato', (req, res) => {
        console.log('');
        res.render('site/contato');
    });
};