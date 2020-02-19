var db = require('../../config/db');

module.exports = () => {
    this.all = (callback) => {
        return db().query('SELECT * FROM clientes', callback);
    };

    return this;
};