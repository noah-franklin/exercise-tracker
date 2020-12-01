const db = require('../services/db.js');
const prefix = "EX_Fall_2020_";
const auth = require('./auth');
require('dotenv').config()

module.exports = {
    getAllTypes: (req,res) => {
       
       db.query(`SELECT * FROM ${prefix}Exercise_Types`, function (err, results, fields) {
           console.log(results)
            if (err) throw err
            res.send(results)
        });
            

    },
    
}
