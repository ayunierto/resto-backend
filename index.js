const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

// Public Dir
app.use( express.static('public') );

// Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});