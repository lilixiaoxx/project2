var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Recommendation = require('../models/recommendation');
var authWall = require('../lib/auth_wall');


////////////////////////////////////
// GET standard user profile page //
////////////////////////////////////

router.get('/', authWall, function(req, res, next) {
  res.render('profile');
});

////////////////////////////////////////////////////
// GET list of ONLY tutor users for searchability //
////////////////////////////////////////////////////

router.get('/tutorslist', function(req, res, next) {
  User.find({tutor:true}, function(err, users){
    if (err) console.log(err);
    res.render('tutorslist', {users: users});
  });
});

/////////////////////////////
// GET TUTOR profile pages //
/////////////////////////////

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  User.findOne({_id:id}, function(err, tutor){
    if(err)console.log(err);

// Display Likes on tutor pages via Recommendation model //
    Recommendation.count({tutor_id: id, isLiked:true}, function(err, numLikes){
      Recommendation.count({tutor_id: id, isLiked:false}, function(err, numDislikes){
        res.render('tutor', {tutor: tutor, numLikes: numLikes, numDislikes: numDislikes, errorMessage: req.flash('error')});
      });
    });
  })
});

////////////////////////////////////////////////////
// CREATE Likes on tutor pages, store in database //
////////////////////////////////////////////////////

router.post('/:id/likeTutor', function(req, res, next){
  var tutorId = req.params.id;

 // Determine if 'like' or 'dislike' //
  var likeOrDislike = req.body.like;
  var booleanLike = (likeOrDislike === 'Like');


  var recommended = new Recommendation ({
    tutor_id: req.params.id,
    student_id: req.user._id,
    isLiked: booleanLike
  });
  recommended.save(function(err, recommendation){
    if(err) {

// Error message if user has tried to like or dislike tutor twice //
      req.flash('error', 'Error...Error...OVERLOAD! Keep it to one per tutor, please.');
    }
      res.redirect('/profiles/' + tutorId);
  });
});

module.exports = router;




