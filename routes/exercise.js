const express = require('express');
const router = express.Router();
const models = require('../models/exercise.js');



router.get('/', models.getAllExercise);


module.exports = router;
