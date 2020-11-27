const db = require('../services/db.js');
const prefix = "EX_Fall_2020_"
var jwt = require('jsonwebtoken');
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
        console.log(req.params.id)
        //console.log(req.headers.authorization)
        let token = req.headers.authorization.split(' ')
        console.log(token[1])
        let decoded = jwt.verify(token[1], process.env.JWT_SECRET);
        decoded = JSON.parse(decoded.data)
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
        let token = req.headers.authorization.split(' ')
        
        let decoded = jwt.verify(token[1], process.env.JWT_SECRET);
        decoded = JSON.parse(decoded.data)
        
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
