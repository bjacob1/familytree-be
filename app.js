const config = require('./utils/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const peopleRouter = require('./controllers/people')
const picturesRouter = require('./controllers/pictures')
const path = require('path')

mongoose.connect(config.MONGO_URI).then(() => console.log('mongo connected'))

app.use(express.static('build'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.use('/api/people/', peopleRouter)
app.use('/api/pictures/', picturesRouter)

module.exports = app