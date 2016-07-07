var mongoose = require('mongoose');

var recommendationSchema = new mongoose.Schema({
  tutor_id: { type: String, required: true }, // ratee
  student_id: { type: String, required: true }, //rater
  isLiked: { type: Boolean, required: true }
});
recommendationSchema.index({ tutor_id: 1, student_id: 1}, {unique: true});

// Need to find what goes in the single quotes below
var Recommendation = mongoose.model('recommendations', recommendationSchema);

module.exports = Recommendation;
