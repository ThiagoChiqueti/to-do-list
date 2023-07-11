const mongoose = require('mongoose')

const checkListSchema = mongoose.Schema({
  name:{type: String, required: true}
})

module.exports = mongoose.model('Checklist', checkListSchema)