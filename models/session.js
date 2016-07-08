var mongoose = require('mongoose');

/////////////////////////////////////////////////////////////////////////////////
//This is a model that we originally had intended to include in our initial /////
// ERDs. Due to time constraints of the project (4 days to compmplete), we  /////
// decided not to include this in development. We would eventually like to add //
// this to add a session booking feature to further help connect students and////
// tutors. Also, we may rename so as not to confusse with 'cookie sessions'. ////

var sessionSchema = new mongoose.Schema({
  tutor_id: { type: String, required: true },
  student_id: { type: String, required: true },
  date: { type: Date, type: Time },
  location: { type: String, required: true },
  subject: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now }
});

var Session = mongoose.model('##########', sessionSchema);

module.exports = Session;
