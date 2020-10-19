let mysql = require('mysql');
let config = require('./config');

module.exports = {
    checkCredentials
};

let connection = mysql.createConnection({
        host: config.dbHost,
        user: config.dbUser,
        password: config.dbPassword,
        database: config.database

});

function checkCredentials (username, password, callback) {
    connection.query('SELECT * FROM user_credentials WHERE username=\'' + username + '\' and password=\'' + password + '\'', (err, rows) => {
        if (err) {
            throw err
        } else {
            // if username and password come up with a match, return true, else, return false
            if (rows.length > 0) {
                callback(true)
            } else {
                callback(false)
            }
        }
    });

}

