/*
 * USER MODEL
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    bcrypt = require("bcryptjs");

var UserSchema = new Schema({
    username: String,
    sex: String,
    age: Number,
    location: String,
    bio: String,
    passwordDigest: String,
    james: [{type: Schema.Types.ObjectId, ref: 'Jame'}]
});


 // create a new user with secure (hashed) password
UserSchema.statics.createSecure = function(username, password, callback){
    // `this` references our schema
    // store it in variable `user` because `this` changes context in nested callbacks

    var user = this;

    // hash password user enters at sign up
    bcrypt.genSalt(function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        

        // create the new user (save to db) with hashed password
        user.create({
          username: username,
          passwordDigest: hash
        }, callback);
      });
    });
  };
// authenticate user (when user logs in)
UserSchema.statics.authenticate = function (username, password, callback) {
// find user by username entered at log in
this.findOne({username: username}, function (err, user) {
  console.log(user);

  // throw error if can't find user
  if (!user) {
    console.log('No user with username ' + username);

  // if found user, check if password is correct
  } else if (user.checkPassword(password)) {
    callback(null, user);
  } 
  // else {
  //   callback("Error: incorrect password",null);
  // }
});
};

// compare password user enters with hashed password (`passwordDigest`)
UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
  return bcrypt.compareSync(password, this.passwordDigest);
};


// MIDDLEWARE
UserSchema.pre('save', function(next){
  // set a created_at and update updated_at
  next();
});

// export post model
var User = mongoose.model('User', UserSchema);

module.exports = User;
