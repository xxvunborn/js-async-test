const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const userHandler = require('./userHandler')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

const port = 3000

app.get('/user', async (req, res) => {
  const t = await userHandler.getRandomUser()
  return res.send(t)
})

app.get('/users', (req, res) => userHandler.getHundredUsers().then(
  obj => res.send(obj)
))

app.listen(port, err => {
  if (err) {
    process.exit(1)
  }
  console.log("localhost:3000")
})
