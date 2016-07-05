var express = require('express');
var router = express.Router();
var authWall = require('../lib/auth_wall');
var User = require('../models/user');
// var Session = require('../models/session');
// var Location = require('../models/location');
// var Skill = require('../models/skill');

                      ////////////////////////////
                      //////  GET ROUTES   ///////
                      ////////////////////////////


/////////////////////////////////
// SHOW USER profile page page //
/////////////////////////////////

// PROFILE is a temporary name, can redirect to '/' if we prefer but we need either :id param or a profile page
// for each user to go to
router.get('/', authWall, function(req, res, next) {
  // var user = req.param.email;
  // User.findOne({user: user}, function(err, user){
  //   if (err) console.log(err);
  //   res.render('', {user: user})
  //   // corresponding user ejs file goes in quotes on line 24
  // })
   res.send("Welcome back, " + req.user.email);
});


///////////////////////////////
// GET new user sign in page //
///////////////////////////////
//Consider moving this to home page?

router.get('/new', function(req, res, next) {
  res.render('users/new', { title: 'Express' });
});

///////////////
// EDIT user //
///////////////

// router.get('/', function(req, res, next){
//   // get edit form
//   //need add :id
//   var id = req.params.id;
//   User.findOne({_id: id }, function(err, user){
//     if (err) console.log(err);
//     res.render('edit', {user: user})
//     //need an edit page
//   })
// });


                      ////////////////////////////
                      //////  POST ROUTES   //////
                      ////////////////////////////


////////////////////////////////////
// CREATE new User retrieve data  //
////////////////////////////////////
//may need to revert below back to '/'
router.post('/', function(req, res, next) {
  var user = new User(req.body);
     // name: req.body.name,
     // email: req.body.email,
     // teacher: req.body.teacher,
     // gender: req.body.gender,
     // age: req.body.age,
     // skills: req.body.skills
  // });

  user.save(function(err, user) {
    // Handle save error
    if (err) return next(err);
    res.redirect('/users/new');
    //unsure if this is the correct redirect
    //made up profile page if we wanted to create this potential ejs file as the main page all users who
    // sign up or login are redirected to ultimately
  });
});


                      ////////////////////////////
                      //////  PATCH ROUTES   /////
                      ////////////////////////////

////////////////
// UPDATE user//
////////////////

// router.patch('/:id', function(req, res, next){
//   // redirect to show
//   User.findByIdAndUpdate(req.params.id, req.body, function(err, recipe){
//     if (err) console.log(err);
//     res.redirect('/' + req.params.id);
//   })
// });


                      /////////////////////////////
                      //////  DELETE ROUTES   //////
                      ////////////////////////////

//unsure what we would be deleting

/////////////////
// DELETE user //
/////////////////

// router.delete('/:id', function(req, res, next){
//   // redirect to index
//   User.findByIdAndRemove(req.params.id, req.body, function(err, recipe){
//     if (err) console.log(err);
//     res.redirect('/');
//   })
// });



module.exports = router;
