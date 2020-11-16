const db = require('../services/db.js');


module.exports = {
    getAll: (req, res, next) => {
        db.query('SELECT * FROM users', function (err, results, fields) {
            if (err) throw err
            res.send(results)
        });
    }
}