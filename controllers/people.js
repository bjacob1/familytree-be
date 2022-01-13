const peopleRouter = require('express').Router()
const res = require('express/lib/response')
const Person = require('../models/person')

peopleRouter.get('/', async (req, res) => {
  const people = await Person.find({})
  return res.json(people)
})

peopleRouter.get('/:id', async (req, res) => {
  return res.json(await Person.findById(req.params.id))
})

peopleRouter.get('/number/:number', async (req, res) => {
  return req.params.number === 0 ? null : res.json((await Person.find({ number: req.params.number }))[0])
})

const getChildren = async (id) => {
  const person = await Person.findById(id)
  if(!person) {
    return []
  }
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
  return res.json(await getChildren(req.params.id))
})

peopleRouter.get('/:id/siblings', async (req, res) => {
  const person = await Person.findById(req.params.id)
  console.log(person.first_name)
  let parent = null
  if(person.father_id !== 0) {
    parent = (await Person.find({ number: person.father_id }))[0]
  } else if(person.mother_id !== 0) {
    parent = (await Person.find({ number: person.mother_id}))[0]
  }
  if(!parent) {
    return res.json([])
  }
  res.json(await getChildren(parent.id))
})

module.exports = peopleRouter