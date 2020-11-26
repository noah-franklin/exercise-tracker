const db = require('../services/db.js');
const prefix = "EX_Fall_2020_";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
module.exports = {
    login: (req,res) => {
       console.log(req.body.Username)
       db.query(`SELECT id, Username, FirstName, LastName, DOB, Password, User_Type FROM ${prefix}Users WHERE Username = '${req.body.Username}'`, (err, result, fields) => {
           if (err) throw err;
            console.log(bcrypt.compareSync(req.body.Password, result[0].Password))// true
           if(bcrypt.compareSync(req.body.Password, result[0].Password)) {
               const ONE_DAY= 60 * 60 * 24
               const token = jwt.sign({ data : JSON.stringify(result) },process.env.JWT_SECRET, {
                   expiresIn: ONE_DAY
               })
                res.send({user : result, token: token})
           } else {
               res.send('Wrong Login information')
           }

       })

    }
}
