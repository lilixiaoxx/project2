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
  console.log(req.user);
  res.render('profile');
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
    res.redirect('profiles');
  });
});
module.exports = router;
