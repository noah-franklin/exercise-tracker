const express = require("express");
const router = express.Router();
const models = require("../models/workout.js");

//router.get('/', models.getWorkoutsByID)
router.post("/add", models.addWorkout);
router.post("/", models.searchWorkouts);
router.get("/", models.getWorkouts);
module.exports = router;
