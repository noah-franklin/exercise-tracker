const express = require('express');
const router = express.Router();
const models = require('../models/users.js');


//FULL CRUD
router.get('/', models.getAll);
router.post('/register', models.addUser);
router.get('/:id/delete', models.deleteUser)
router.post('/:id/update', models.updateUser)
router.get('/:id', models.getUserByID)

module.exports = router;
