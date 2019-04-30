const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes')(app)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 3000

var server = app.listen(port, function() {
  console.log('Express server has started on port ' + port)
})
