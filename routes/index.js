var express = require('express');
var router = express.Router();
var User = require('../models/user');
var authWall = require('../lib/auth_wall');

//var Session = require('../models/session');
// var Location = require('../models/location');
// var Skill = require('../models/skill');


///////////////////////
//// GET home page ////
//////////////////////

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/', authWall, function(req, res, next) {
//    res.send("Welcome back, " + req.user.email);
// });


router.get('/profiles', function(req, res, next) {
  // Review.find({})
  res.render('profile');
});

router.get('/profiles/tutorslist', function(req, res, next) {
  User.find({tutor:true}, function(err, users){
    if (err) console.log(err);
    res.render('tutorslist', {users: users});
  });
});

router.get('/profiles/:id', function(req, res, next) {
  var id = req.params.id;
  User.findOne({_id:id}, function(err, tutor){
    if(err)console.log(err);
    res.render('tutor', {tutor:tutor});
  })
});

router.post('/', function(req, res, next) {
  var user = new User({
     // name: req.body.name,
     first_name: req.body.first_name,
     last_name: req.body.last_name,
     email: req.body.email,
     password: req.body.password,
     phone: req.body.phone,
     // gender: req,body.gender
     age: req.body.age,
     tutor: req.body.tutor
  });

  user.save(function(err, user) {
    // Handle save error
    if (err) return next(err);
    res.redirect('/');
  });
});

////// Teacher Review Get & Post ///////


router.post('/profiles', function(req, res, next) {
  var review = req.body;
  //or
  var review = new Review({
    tutor_review: req.body
  })
  review.save(function(err, review){
    if (err) return next(err);
    res.redirect('profiles');
  });
});

module.exports = router;
