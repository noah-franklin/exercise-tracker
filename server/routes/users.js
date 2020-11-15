var express = require('express');
var router = express.Router();
const db = require('../services/db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query('SELECT * FROM users', function (err, rows, fields) {
  if (err) throw err

  res.send(rows)
});
});

router.post('/', function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  let firstname = req.body.first_name;
  let lastname = req.body.last_name;
  let isAdmin = req.body.is_admin;
  
  res.send(username);
  var sql = `INSERT INTO users (username, password, first_name, last_name, is_admin) 
  VALUES('${username}', '${password}', '${firstname}', '${lastname}', ${isAdmin})`;
  // VALUES('billly','bob', 'billy', 'bob', 0)`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

 });

module.exports = router;
