var clienteController = require('../controllers/ClienteController');

module.exports = (app) => {
    app.get('/', (req, res) => {
        clienteController.index(req, res);
    });

    app.get('/cliente/:id', (req, res) => {
        clienteController.show(req, res);
    });

    app.get('/contato', (req, res) => {
        console.log('');
        res.render('site/contato');
    });
};