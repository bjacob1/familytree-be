const config = require('./utils/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(config.MONGO_URI)