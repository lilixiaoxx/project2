var mongoose = require('mongoose');

var sessionSchema = new mongoose.Schema({
  tutor_id: { type: String, required: true }, // will be a user_id
  student_id: { type: String, required: true }, // will be a user_id
  date: { type: Date, type: Time }, // need to confirm how to add a date and time
  location: { type: String, required: true },
  subject: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now }
});

// Need to find what goes in the single quotes below
var Session = mongoose.model('##########', sessionSchema);

module.exports = Session;
