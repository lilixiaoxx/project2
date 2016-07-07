var mongoose = require('mongoose');

var likesSchema = new mongoose.Schema({
  tutor_id: { type: String, required: true }, // ratee
  student_id: { type: String, required: true }, //rater
  like: { type: Boolean, defaultsTo: false, required: false },
  dislike: { type: Boolean, defaultsTo: false, required: false }
});

// Need to find what goes in the single quotes below
var Likes = mongoose.model('##### Likes ####### ', likesSchema);

module.exports = Likes;
