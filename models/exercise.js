const db = require('../services/db.js');
const prefix = "EX_Fall_2020_";
const auth = require('./auth');
require('dotenv').config()
module.exports = {
    getAllExercise: (req,res) => {
       
       db.query(`SELECT * FROM ${prefix}Exercise_Types`, function (err, results, fields) {
           console.log(results)
            if (err) throw err
            res.send(results)
        });
            

    },
    addExercise: (req, res) => {
        let decoded = auth.verifyToken(req)
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
        let decoded = auth.verifyToken(req)
        if(decoded[0].User_Type == 1){
            //console.log('wtf')
            db.query(`DELETE FROM ${prefix}Exercise_Types WHERE id = ${req.params.id}`,
            (err, results, fields) => {
                if (err) throw err
               
            })
        }

    },
    editExercise: (req, res) => {
        let decoded = auth.verifyToken(req)
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
