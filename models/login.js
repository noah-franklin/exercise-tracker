const db = require('../services/db.js');
const prefix = "EX_Fall_2020_";
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()
module.exports = {
    login: (req,res) => {
       console.log(req.body.Username)
       db.query(`SELECT id, FirstName, LastName, DOB, Password, User_Type FROM ${prefix}Users WHERE Username = '${req.body.Username}'`, (err, result, fields) => {
           if (err) throw err;
            console.log(bcrypt.compareSync(req.body.Password, result[0].Password))
           if(bcrypt.compareSync(req.body.Password, result[0].Password)) {
               const ONE_WEEK = 60 * 60 * 24 * 7
               const token = jwt.sign({ data : JSON.stringify(result) },process.env.JWT_SECRET, {
                   expiresIn: ONE_WEEK
               })
                res.send({user : result, token: token})
           }// true

       })

    }
}
