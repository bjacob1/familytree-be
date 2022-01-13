const peopleRouter = require('express').Router()
const Person = require('../models/person')

peopleRouter.get('/', async (req, res) => {
  const people = await Person.find({})
  return res.json(people)
})

peopleRouter.get('/:id', async (req, res) => {
  const person = await Person.findById(req.params.id)
  return res.json(person)
})

const getChildren = async (person) => {
  const number = person.number
  let children = []
  if(person.gender === 'Male') {
    children = await Person.find({ father_id: number })
  } else {
    children = await Person.find({ mother_id: number })
  }
  return children
}

peopleRouter.get('/:id/children', async (req, res) => {
  const person = await Person.findById(req.params.id)
  return res.json(await getChildren(person))
})

peopleRouter.get('/:id/siblings', async (req, res) => {
  const person = await Person.findById(req.params.id)
  if(person.father_id !== 0) {
    console.log('hello')
    await peopleRouter.get(`/${person.father_id}/children`)
  } else if(person.mother_id !== 0) {
    return peopleRouter.get(`/${person.mother_id}/children`)
  }
  res.json([])
})

module.exports = peopleRouter