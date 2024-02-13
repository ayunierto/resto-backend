const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

app.use( express.static('public') );

app.get('/', (req, res) => {
  res.json({
    ok: true
  })
})

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});