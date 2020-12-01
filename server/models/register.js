const db = require('../services/db.js');
const prefix = "EX_Fall_2020_";
const bcrypt = require('bcrypt');
require('dotenv').config()
module.exports = {
    addUser: (req,res) => {
        
        const hash = bcrypt.hashSync(req.body.Password, parseInt(process.env.SALT));
        console.log(hash)
        db.query(`INSERT INTO ${prefix}Users (created_at, Username, FirstName, LastName, DOB, Password, User_Type) 
        VALUES ('${req.body.created_at}', '${req.body.Username}', '${req.body.FirstName}', '${req.body.LastName}', '${req.body.DOB}', '${hash}', '2')`, 
        (err, results, fields) => {
            if (err) throw err
            res.send("Successfully added users!")
        })

    }
}
