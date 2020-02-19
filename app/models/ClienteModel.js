var db = require('../../config/db');

module.exports = () => {
    this.all = (callback) => {
        return db().query('SELECT * FROM clientes', callback);
    };

    this.find = (id, callback) => {
        return db().query('SELECT * FROM clientes WHERE id = ?', id, callback);
    };

    this.save = (data, callback) => {
        return db().query('INSERT INTO clientes set ?', data, callback);
    };

    return this;
};