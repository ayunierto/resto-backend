const express = require('express');
const {dbConnection} = require('./database/config');
const app = express();
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT;

// Database
dbConnection();

// CORS
app.use( cors() );

// Public Dir
app.use( express.static('public') );

// Body reading and parsing (recover info)
app.use( express.json() );

// Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});