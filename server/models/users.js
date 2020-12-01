const db = require('../services/db.js');
const prefix = "EX_Fall_2020_"
const auth = require('./auth');
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
        let decoded = auth.verifyToken(req)
        console.log(decoded[0].User_Type)
        res.send("found me lol")
        if(decoded[0].User_Type == 1){
            console.log('wtf')
            db.query(`DELETE FROM ${prefix}Users WHERE id = ${req.params.id}`,
            (err, results, fields) => {
                if (err) throw err
               
            })
        }
       
    },
    updateUser: (req, res) => {
        let decoded = auth.verifyToken(req)
        if(decoded[0].User_Type == 1){
            db.query(`UPDATE ${prefix}Users 
            SET User_Type = '${req.body.User_Type}'
            WHERE id = ${req.params.id}`,
            (err, results, fields) => {
                if (err) throw err
                
            })
        }
    }

    }
