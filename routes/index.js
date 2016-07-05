var express = require('express');
var router = express.Router();
var User = require(‘../models/user’)
//var Session = require('../models/session');
// var Location = require('../models/location');
// var Skill = require('../models/skill');


///////////////////////
//// GET home page ////
//////////////////////

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
