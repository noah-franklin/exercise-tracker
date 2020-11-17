const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.js');


//FULL CRUD
router.get('/', controller.getAll);
router.get('/:id', controller.getUserByID)
router.post('/register', controller.addUser);
router.post('/:id/delete', controller.deleteUser)
router.post('/:id/update', controller.updateUser)

module.exports = router;
