const mysql = require ('mysql');
const config = require('./config');

const database = mysql.createConnection({
    host:config.localhost,
    port:config.port,
    user:config.root,
    password:config.passsword,
    database:config.database
});

module.exports = database;