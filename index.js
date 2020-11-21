
const express = require('express');
const cors = require('cors');
const users = require('./routes/users')
const register = require('./routes/register')
const index = require('./routes/index')
const login = require('./routes/login')
//const bodyParser = require('body-parser')
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/', index);
app.use('/users', users);
app.use('/register', register)
app.use('/login', login)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
