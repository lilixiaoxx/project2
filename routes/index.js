var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Recommendation = require('../models/recommendation');
var authWall = require('../lib/auth_wall');



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/newUser', function(req, res, next) {
  var user = new User({
     first_name: req.body.first_name,
     last_name: req.body.last_name,
     email: req.body.email,
     password: req.body.password,
     phone: req.body.phone,
     age: req.body.age,
     tutor: req.body.tutor
  });
  user.save(function(err, user) {
    // Handle save error
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;
