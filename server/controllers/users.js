const express = require('express');
const users = require('../models/users');

const router = express.Router();



router
    .get('/', (req, res, next) => {
        users.getAll().then(x=> res.send( x ) )
        .catch(next);
    })

    module.exports = { router }