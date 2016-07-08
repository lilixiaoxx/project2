var mongoose = require('mongoose');

////////////////////////////////////////////////////////////////////////////////
// This model stores 'liking' data on tutor profiles. Students can search for //
// tutors and like them on the tutor page.                                    //
////////////////////////////////////////////////////////////////////////////////

var recommendationSchema = new mongoose.Schema({
  tutor_id: { type: String, required: true }, // ratee
  student_id: { type: String, required: true }, //rater
  isLiked: { type: Boolean, required: true }
});

// Only one like per student and teacher combo
recommendationSchema.index({ tutor_id: 1, student_id: 1}, {unique: true});

var Recommendation = mongoose.model('recommendations', recommendationSchema);

module.exports = Recommendation;
