//Load environment variables.
require('dotenv').config({ path: './.env' });
require('./util/db');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:3001"
};

app.use(express.json());
app.use(cors(corsOptions));
require('./routes/user')(app);
require('./routes/auth')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});









