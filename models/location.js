var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, min: 10, max: 10, required: false },
  location_type: { type: String, required: true },
  url: { type: String, required: true }
});

// Need to find what goes in the single quotes below
var Location = mongoose.model('##### Location ####### ', locationSchema);

module.exports = Location;
