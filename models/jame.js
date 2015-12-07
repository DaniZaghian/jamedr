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

// export jame model
var Jame = mongoose.model('Jame', JameSchema);

module.exports = Jame;