var db = require('../../config/db');

module.exports = () => {
    this.all = () => {
        db().query('SELECT * FROM clientes', (err, result) => {
            console.log(result);
        });

        return [{nome: "Teste", email: "mail@mail.com"}];
    };

    return this;
};