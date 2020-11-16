
const express = require('express');
const cors = require('cors');
const users = require('./routes/users')
//const bodyParser = require('body-parser')
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', users);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
