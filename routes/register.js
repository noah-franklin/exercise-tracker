const express = require('express');
const router = express.Router();
const models = require('../models/register.js');



router.post('/', models.addUser);


module.exports = router;
