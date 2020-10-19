let mysql = require('mysql');

module.exports = {
    checkCredentials
};

let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'jwt_auth'

});

function checkCredentials (username, password, callback) {
    connection.query('SELECT * FROM user_credentials WHERE username=\'' + username + '\' and password=\'' + password + '\'', (err, rows) => {
        if (err) {
            throw err
        } else {
            if (rows.length > 0) {
                callback(true)
            } else {
                callback(false)
            }
        }
    });

}

