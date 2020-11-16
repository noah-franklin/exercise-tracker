const db = require('../services/db.js');


module.exports = {
    getAll: (req, res, next) => {
        db.query('SELECT * FROM users', function (err, results, fields) {
            if (err) throw err
            res.send(results)
        });
    },
    getUserByID: (req, res, next) => {
        db.query(`SELECT * FROM users WHERE id=${req.params.id}`, function (err, results, fields) {
            if (err) throw err
            res.send(results)
        }
    
}