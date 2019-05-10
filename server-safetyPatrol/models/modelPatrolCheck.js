const mongoose = require('mongoose');  
const Schema   = mongoose.Schema;

const checkedPatrol = new Schema({ 
  UserId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
  checkedPatrol: [{
    frLamp: String,
    rrLamp: String,
    stopLamp: String,
    lfSein: String,
    rgSein: String,
    note: String,
    dateCheck: Date || new Date()
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('CheckedPatrol', checkedPatrol);