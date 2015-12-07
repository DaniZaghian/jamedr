// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
console.log("sanity check: seed.js");
var mongoose = require('mongoose');
var Jame = require("./models/jame.js");

// connect to database!
var dbName = 'seed-mean-html';
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/' + dbName, options);    


var james_list =[
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "mugpic", image: "http://i.imgur.com/ZrXhdFK.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "catpic", image: "http://i.imgur.com/5MbNeTi.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "dishes", image: "http://i.imgur.com/A0NmYc2.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "crop", image: "http://i.imgur.com/pS59bTI.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "hammer", image: "http://i.imgur.com/sCQNisD.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "mug2", image: "http://i.imgur.com/yfuvCfB.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "poolside", image: "http://i.imgur.com/GrstCbi.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "business call", image: "http://i.imgur.com/IcEFUWp.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "business call2", image: "http://i.imgur.com/y7M7SC6.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "statue", image: "http://i.imgur.com/6pcz8ME.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "perfumegrill", image: "http://i.imgur.com/brSdUIf.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "mug3", image: "http://i.imgur.com/DD2Lbi3.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "hammer2", image: "http://i.imgur.com/oyVzauw.jpg"}
];

Jame.remove({}, function(err, jame){

  Jame.create(james_list, function(err, james){
    if (err) { return console.log(err); }
    console.log("created", james.length, "james");
    process.exit();
  });

});
