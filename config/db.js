var mysql = require('mysql');

var con = () => {
    return mysql.createConnection({
        host: 'localhost',
        port: '3307',
        user: 'root',
        password: 'mysql2020',
        database: 'curso_node'
    });
};

module.exports = con;