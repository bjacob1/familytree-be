const peopleRouter = require('express').Router()
const Person = require('../models/person')

peopleRouter.get('/', async (req, res) => {
  console.log('here')
  const people = await Person.find({})
  res.json(people)
})

module.exports = peopleRouter