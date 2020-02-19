var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'mysql2020',
    database: 'curso_node'
});

module.exports = () => {
    this.all = () => {
        con.query('SELECT * FROM clientes', (err, result) => {
            console.log(result);
        });

        return [{nome: "Teste", email: "mail@mail.com"}];
    };

    return this;
};