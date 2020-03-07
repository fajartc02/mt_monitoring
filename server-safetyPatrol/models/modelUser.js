const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: { type: String, required: true },
  noreg: { type: String, required: true, unique: true },
  shift: { type: String, required: true },
  noPolice: { type: String, required: true, unique: true },
  simValid: {
    type: Date,
    required: true
  },
  stnkValid: {
    type: Date,
    required: true
  },
  checkedPatrol: [{
    frLamp: String,
    rrLamp: String,
    stopLamp: String,
    lfSein: String,
    rgSein: String,
    lfSpion: String,
    rgSpion: String,
    simChecked: String,
    sinarMasChecked: String,
    stnkChecked: String,
    helm: String,
    klakson: String,
    shoe: String,
    wheel: String,
    rainCoat: String,
    spareLampFr: String,
    spareLampBrake: String,
    note: String,
    dateCheck: Date
  }]
}, {
  timestamps: true
})


const User = mongoose.model('User', userSchema)
module.exports = User