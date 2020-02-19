var clienteModel = require('../models/ClienteModel')();

module.exports.index = (req, res) => {
    clienteModel.all((err, result) => {
        res.render('site/home', {clientes: result});
    });
};

module.exports.store = () => {

};

module.exports.show = (req, res) => {
    clienteModel.find(req.params.id, (err, result) => {
        if (result.length > 0 && !err) {
            res.render('cliente/show', {cliente: result[0]});
        } else {
            console.error('Cliente não existe');
            res.redirect('/');
        }
    });
};