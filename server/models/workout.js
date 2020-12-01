const db = require('../services/db.js');
const prefix = "EX_Fall_2020_";
const auth = require('./auth')

require('dotenv').config()

module.exports = {
    addWorkout: (req, res) => {
       
        let decoded = auth.verifyToken(req)
        console.log(decoded)
        //console.log(req.body.End_Time)
        if(decoded != null) {
        
            db.query(`INSERT INTO ${prefix}Workouts (created_at, Owner_id, Start_Time, End_Time, Exercise_Type, Note, Distance) 
            VALUES ('${req.body.created_at}','${decoded[0].id}', '${req.body.Start_Time}',
            '${req.body.End_Time}', '${req.body.Exercise_Type}','${req.body.Note}','${req.body.Distance}')`,
            (err, results, fields) => {
                if (err) throw err
                res.send("Successfully added exercise!")
            })
        }
        else {
            res.send('BAD JWT TOKEN')
        }
        
        
        
        
    },
    getWorkouts: (req, res) => {
        let decoded = auth.verifyToken(req)
        console.log(decoded)
        if(decoded != null) {
        
        db.query(`SELECT * FROM ${prefix}Workouts WHERE Owner_id=${decoded[0].id} ORDER BY Start_Time DESC`,
        (err, results, fields) => {
            if (err) throw err
            res.send(results)
            //res.send("Successfully added exercise!")
        })
        }
        else {
            res.send('BAD JWT TOKEN')
        }
    }




}