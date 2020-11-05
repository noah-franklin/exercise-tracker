var mysql = require('mysql');
const express = require('express')
const bodyParser = require('body-parser')
const users = require('./controllers/users');
require('dotenv').config()
const app = express()
app.use(express.json());
const port = 8000;

var con = mysql.createConnection({
  
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});


app.get('/', (req, res, next) => {
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result[0].username)
  });
})

app.listen(port);

module.exports = { con }
