const db = require('../services/db.js');
const prefix = "EX_Fall_2020_"

module.exports = {
    getAll: (req, res) => {
        db.query(`SELECT * FROM ${prefix}Users`, function (err, results, fields) {
            if (err) throw err
            res.send(results)
        });
    },
    getUserByID: (req, res) => {
        db.query(`SELECT * FROM ${prefix}Users WHERE id=${req.params.id}`, function (err, results, fields) {
            if (err) throw err
            res.send(results)
        });
    },
    addUser: (req,res) => {
        db.query(`INSERT INTO ${prefix}Users (created_at, FirstName, LastName, DOB, Password, User_Type) 
        VALUES ('${req.body.created_at}', '${req.body.FirstName}', '${req.body.LastName}', '${req.body.DOB}', '${req.body.Password}', '${req.body.User_Type}')`, 
        (err, results, fields) => {
            if (err) throw err
            res.send("Successfully added users!")
        })

    },
    deleteUser: (req, res) => { 
        db.query(`DELETE FROM ${prefix}Users WHERE id = ${req.params.id} AND Password = '${req.body.Password}'`,
        (err, results, fields) => {
            if (err) throw err
            res.send("Deleted User")
        })
       
    },
    updateUser: (req, res) => {
        db.query(`UPDATE ${prefix}Users 
        SET created_at = '${req.body.created_at}', FirstName = '${req.body.FirstName}', LastName = '${req.body.LastName}', DOB = '${req.body.DOB}', Password = '${req.body.Password}', User_Type = '${req.body.User_Type}'
        WHERE id = ${req.params.id} AND Password = '${req.body.OldPassword}'`,
        (err, results, fields) => {
            if (err) throw err
            res.send("Updated User")
        })
    }

    }
