const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
  order: String,
  number: Number,
  father_id: Number,
  mother_id: Number,
  spouse_id: Number,
  prefix: String,
  first_name: String,
  middle_name: String,
  last_name: String,
  family_name: String,
  nickname: String,
  secondary_nickname: String,
  death_anniversary: String,
  birthdate: String,
  birthplace: String,
  gender: String,
  city: String,
  state: String,
  country: String,
  address: String,
  po: String,
  email: String,
  phone: String,
  image: String,
  family_image: String,
  history: String,
  family: String,
  sibling: Number
})

personSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString()
    delete returnedObj._id
    delete returnedObj.order
    // delete returnedObj.number
    // delete returnedObj.father_id
    // delete returnedObj.mother_id
    // delete returnedObj.spouse_id
    delete returnedObj.death_anniversary
    delete returnedObj.birthdate
    delete returnedObj.birthplace
    // delete returnedObj.gender
    delete returnedObj.address
    delete returnedObj.po
    delete returnedObj.email
    delete returnedObj.phone
    // delete returnedObj.image
    // delete returnedObj.family_image
    delete returnedObj.history
    delete returnedObj.sibling
  }
})

module.exports = mongoose.model('Person', personSchema)