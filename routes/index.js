const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(`Welcome to noah's exercise API :)
    endpoints: '/users',' /users/:id'
    
    `)
});

module.exports = router;
