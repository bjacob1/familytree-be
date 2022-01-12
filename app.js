const config = require('./utils/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const peopleRouter = require('./controllers/people')

mongoose.connect(config.MONGO_URI).then(() => console.log('mongo connected'))

app.use('/api/people/', peopleRouter)

module.exports = app