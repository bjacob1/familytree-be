const picturesRouter = require('express').Router()
const Picture = require('../models/picture')

picturesRouter.get('/', async (req, res) => {
  const pics = await Picture.find({})
  res.json(pics)
})

picturesRouter.post('/', async (req, res) => {
  const body = req.body
  const new_pic = {
    heading: body.caption,
    url: body.url,
    alt: body.alt,
    caption: body.caption
  }
  const added_pic = await Picture.bulkSave(new_pic)
  res.json(added_pic)
})

module.exports = picturesRouter