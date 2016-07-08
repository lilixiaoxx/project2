var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Recommendation = require('../models/recommendation');
var authWall = require('../lib/auth_wall');



router.get('/', authWall, function(req, res, next) {
  res.render('profile');
});

router.get('/tutorslist', function(req, res, next) {
  User.find({tutor:true}, function(err, users){
    if (err) console.log(err);
    res.render('tutorslist', {users: users});
  });
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  User.findOne({_id:id}, function(err, tutor){
    if(err)console.log(err);
    Recommendation.count({tutor_id: id, isLiked:true}, function(err, numLikes){
      Recommendation.count({tutor_id: id, isLiked:false}, function(err, numDislikes){
        res.render('tutor', {tutor: tutor, numLikes: numLikes, numDislikes: numDislikes, errorMessage: req.flash('error')});
      });
    });
  })
});

router.post('/:id/likeTutor', function(req, res, next){
  var tutorId = req.params.id;
  var recommended = new Recommendation ({
    tutor_id: req.params.id,
    student_id: req.user._id,
    isLiked: req.body
  });
  recommended.save(function(err, recommendation){
    if(err) {
      req.flash('error', 'Error...Error...LIKE OVERLOAD! Keep it to one per tutor, please.');
    }
      res.redirect('/profiles/' + tutorId);
  });
});


module.exports = router;




