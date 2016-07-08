var mongoose = require('mongoose');


/////////////////////////////////////////////////////////////////////////////////
// This is a model that we originally had intended to include in our initial ////
// ERDs. Due to time constraints of the project (4 days to compmplete), we   ////
// decided not to include this in development. We would eventually like to add //
// this to add a location booking feature to further help connect students and //
// tutors. I.e., 1-on-1/in-home, group meet ups at coffee shops, etc.          //
/////////////////////////////////////////////////////////////////////////////////

var locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, min: 10, max: 10, required: false },
  location_type: { type: String, required: true },
  url: { type: String, required: true }
});

var Location = mongoose.model('##### Location ####### ', locationSchema);

module.exports = Location;
