const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())//if we want to use req.body this middleware is required

app.get('/',(req,res) => {
  res.send('Hello from backend')
})
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/quiz', require('./routes/quiz'))

connectToMongo();

app.listen(port, () => {
  console.log(`quiz backend listening on port ${port}`)
})


