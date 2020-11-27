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
            

    },
    addExercise: (req, res) => {
        let token = req.headers.authorization.split(' ')
            //console.log(token[1])
            let decoded = jwt.verify(token[1], process.env.JWT_SECRET);
            decoded = JSON.parse(decoded.data)
        if(decoded[0].User_Type == 1){
            
            //console.log('wtf')
            db.query(`INSERT INTO ${prefix}Exercise_Types (created_at, Name, Type) 
            VALUES ('${req.body.created_at}', '${req.body.Name}', '${req.body.Type}')`, 
            (err, results, fields) => {
            if (err) throw err
            res.send("Successfully added exercise!")
        })
        }
        

    },
    deleteExercise: (req, res) => {
        //console.log(req.params.id)
        //console.log(req.headers.authorization)
        let token = req.headers.authorization.split(' ')
        //console.log(token[1])
        let decoded = jwt.verify(token[1], process.env.JWT_SECRET);
        decoded = JSON.parse(decoded.data)
        //console.log(decoded[0].User_Type)
        //res.send("found me lol")
        if(decoded[0].User_Type == 1){
            //console.log('wtf')
            db.query(`DELETE FROM ${prefix}Exercise_Types WHERE id = ${req.params.id}`,
            (err, results, fields) => {
                if (err) throw err
               
            })
        }

    },
    editExercise: (req, res) => {
        //console.log(req.params.id)
        //console.log(req.headers.authorization)
        let token = req.headers.authorization.split(' ')
        //console.log(token[1])
        let decoded = jwt.verify(token[1], process.env.JWT_SECRET);
        decoded = JSON.parse(decoded.data)
        //console.log(decoded[0].User_Type)
        //res.send("found me lol")
        if(decoded[0].User_Type == 1){
            //console.log('wtf')
            db.query(`UPDATE ${prefix}Exercise_Types 
            SET Name = '${req.body.Name}',
            Type = '${req.body.Type}'
            WHERE id = ${req.params.id}`,
            (err, results, fields) => {
                if (err) throw err
                
            })
        }
    }
}
