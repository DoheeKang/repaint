const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const router = require('./routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

var port = process.env.PORT || 3000

app.use('/', router)

var server = app.listen(port, function() {
  console.log('Express server has started on port ' + port)
})
