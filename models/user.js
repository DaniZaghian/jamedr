/*
 * USER MODEL
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    sex: String,
    age: Number,
    location: String,
    bio: String,
    james: [{type: Schema.Types.ObjectId, ref: 'Jame'}]
});


// MIDDLEWARE
UserSchema.pre('save', function(next){
  // set a created_at and update updated_at
  next();
});

// export post model
var User = mongoose.model('User', UserSchema);

module.exports = User;
