const db = require('../services/db.js');
const prefix = "EX_Fall_2020_";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
module.exports = {
    getAllExercise: (req,res) => {
       
       db.query(`SELECT * FROM ${prefix}Exercise_Types`, function (err, results, fields) {
            if (err) throw err
            res.send(results)
        });
            

    }
}
