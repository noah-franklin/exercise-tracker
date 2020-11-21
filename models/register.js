const db = require('../services/db.js');
const prefix = "EX_Fall_2020_";
const bcrypt = require('bcrypt');
module.exports = {
    addUser: (req,res) => {
        res.body.Password = bcrypt.genSalt(process.env.SALT, (err, salt) => {
            bcrypt.hash(res.body.Password, salt, (err , hash) => {
                return hash;
            })
        })
        db.query(`INSERT INTO ${prefix}Users (created_at, FirstName, LastName, DOB, Password, User_Type) 
        VALUES ('${req.body.created_at}', '${req.body.FirstName}', '${req.body.LastName}', '${req.body.DOB}', '${req.body.Password}', '${req.body.User_Type}')`, 
        (err, results, fields) => {
            if (err) throw err
            res.send("Successfully added users!")
        })

    }
}
