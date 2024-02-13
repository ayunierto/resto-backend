const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

// Public Dir
app.use( express.static('public') );

// Body reading and parsing (recover info)
app.use( express.json() );

// Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});