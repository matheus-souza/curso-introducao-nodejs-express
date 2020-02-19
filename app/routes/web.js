module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('site/home');
    });

    app.get('/contato', (req, res) => {
        res.render('site/contato');
    });
};