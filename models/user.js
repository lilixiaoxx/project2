var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

////////////////////////////////////////////////////////////////////////////
// This model stores all user data for those who sign up. Upon sign up,   //
// users are automatically distinguished as as tutor or student via the   //
// 'tutor' property and what they select during sign up. This imporves    //
// searchabilty, profile customization. A password salting encryption has //
// also been implemented.                                                 //
////////////////////////////////////////////////////////////////////////////

var SALT_WORK_FACTOR = 10;

var userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true, index: { unique: true }},
  password: { type: String, required: true },
  age: { type: Number, required: true },
  tutor: { type: Boolean, defaultsTo: false, required: false }
});

userSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.validPassword = function(candidatePassword, cb) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

module.exports = mongoose.model('users', userSchema);
