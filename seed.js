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
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "I like dinosaurs. You like dinosaurs. Message me :)", image: "http://i.imgur.com/ZrXhdFK.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "I'm not actually a cat person.", image: "http://i.imgur.com/5MbNeTi.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "A friend introduced me to the app. Seems like a bit of fun and a potential to meet new people. I'm a very down to earth guy :)", image: "http://i.imgur.com/A0NmYc2.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "Can you feel the universe bringing us together? PS She's just a friend.", image: "http://i.imgur.com/pS59bTI.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "I'm Jamey. I have an addiction to chocolate and I love the beach. If you want something you will have to earn it. Tired of the bar scene.", image: "http://i.imgur.com/sCQNisD.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "I dislike women who aren't shallow.", image: "http://i.imgur.com/yfuvCfB.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "You could do worse.", image: "http://i.imgur.com/GrstCbi.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "Hope is the richness of passion, and of us.", image: "http://i.imgur.com/IcEFUWp.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "I seem fun intially, but then become really weird and stalker-ish after we sleep together.", image: "http://i.imgur.com/y7M7SC6.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "I'm a sapiosexual (look it up)...Being pretty is NOT enough ladies.", image: "http://i.imgur.com/6pcz8ME.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "I have a Ph.D in wumbology, message if you're ready for this jelly. PS She's just a friend.", image: "http://i.imgur.com/brSdUIf.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "Six foot three, world traveler. Message me if you want to know more...", image: "http://i.imgur.com/DD2Lbi3.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "I'm looking to BUILD a solid relationship with someone.", image: "http://i.imgur.com/oyVzauw.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "I'm selfish, impatient, and a little bit insecure. If you can't handle me at my worst, you don't deserve me at my best.", image: "http://i.imgur.com/RY4aM8s.jpg"}
];

Jame.remove({}, function(err, jame){

  Jame.create(james_list, function(err, james){
    if (err) { return console.log(err); }
    console.log("created", james.length, "james");
    process.exit();
  });

});
