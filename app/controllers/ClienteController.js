var clienteModel = require('../models/ClienteModel')();

module.exports.index = (req, res) => {
    clienteModel.all((err, result) => {
        res.render('site/home', {clientes: result, errors: {}, data: {}});
    });
};

module.exports.store = (req, res) => {
    var data = req.body;

    req.assert('nome', 'Preeencha o nome').notEmpty();
    req.assert('nome', 'O nome deve ter de 3 a 20 caracteres').len(3, 20);
    req.assert('email', 'Preeencha com um e-mail válido').isEmail();

    var validationErrors = req.validationErrors();

    if (validationErrors) {
        clienteModel.all((err, result) => {
            res.render('site/home', {clientes: result, errors: validationErrors, data: data});
        });
        return;
    }

    clienteModel.save(data, (err, result) => {
        if (!err) {
            res.redirect('/');
        } else {
            alert('Erro ao adicionar cliente!');
            res.redirect('/');
        }
    });
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