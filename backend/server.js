//Load environment variables.
require('dotenv').config({ path: './.env' });
require('./util/db');

const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');
const blob_client = require('./util/blob')();

// JSON body parsing 
app.use(express.json());
app.use(cors());

// Load routes
require('./routes/user')(app);
require('./routes/auth')(app);
require('./routes/data')(app, blob_client);


// default options
app.use(fileUpload());

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});









