//Load environment variables.
require('dotenv').config({ path: './.env' });
require('./util/db');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
require('./routes/user')(app);
require('./routes/auth')(app);











