var db = require('../../config/db');

module.exports = () => {
    this.all = (callback) => {
        return db().query('SELECT * FROM clientes', callback);
    };

    this.find = (id, callback) => {
        return db().query('SELECT * FROM clientes WHERE id = ?', id,callback);
    };

    return this;
};