const mongoose = require('mongoose')

const pictureSchema = new mongoose.Schema({
  heading: String,
  images: [
    {
      url: String,
      alt: String,
      caption: String
    }
  ]
})

module.exports = mongoose.model('Picture', pictureSchema)