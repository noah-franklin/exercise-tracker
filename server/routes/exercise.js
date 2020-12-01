const express = require('express');
const router = express.Router();
const models = require('../models/exercise.js');



router.get('/', models.getAllExercise);
router.get('/:id/delete', models.deleteExercise);
router.post('/:id/update', models.editExercise);
router.post('/', models.addExercise);

module.exports = router;
