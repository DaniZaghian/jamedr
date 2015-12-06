/*
 * JAME MODEL
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var JameSchema = new Schema({
    username: String,
    sex: String,
    age: Number,
    location: String,
    bio: String,
    image: String
});


// MIDDLEWARE
JameSchema.pre('save', function(next){
  // set a created_at and update updated_at
  next();
});

// export post model
var Jame = mongoose.model('Jame', JameSchema);

module.exports = Jame;