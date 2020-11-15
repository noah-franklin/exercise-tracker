const mysql = require('mysql');
const express = require('express');
var cors = require('cors');
const path = require('path')
const users = require('./routes/users')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/users', users);


const port = process.env.API_PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
