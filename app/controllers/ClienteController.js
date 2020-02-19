var clienteModel = require('../models/ClienteModel')();

module.exports.index = (req, res) => {
    clienteModel.all((err, result) => {
        res.render('site/home', {clientes: result});
    });
};

module.exports.store = () => {

};

module.exports.show = () => {

};