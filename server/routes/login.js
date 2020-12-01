const express = require('express');
const router = express.Router();
const models = require('../models/login.js');



router.post('/', models.login);


module.exports = router;
