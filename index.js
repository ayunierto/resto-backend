const express = require('express')
const app = express()
const port = 3000

app.use( express.static('public') );

app.get('/', (req, res) => {
  res.json({
    ok: true
  })
})

app.listen(port, () => {
  console.log(`Server on port ${port}`)
})