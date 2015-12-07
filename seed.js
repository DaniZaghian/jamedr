// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
console.log("sanity check: seed.js");
var Jame = require("./models/jame.js");

// Jame.create({username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "asdf", image: "http://i.imgur.com/ZrXhdFK.jpg"}, function (err, jame){
//   console.log("hi");
// });
Jame.create({username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "asdf", image: "http://i.imgur.com/ZrXhdFK.jpg"}, function (err, jame){
  console.log(err);
  console.log(jame);
});

var james_list =[
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "asdf", image: "http://i.imgur.com/ZrXhdFK.jpg"},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "sdfuh", image: ""},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "fewai", image: ""},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "weo", image: ""},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "fwea", image: ""},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "ewkg", image: ""},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "ewjk", image: ""},
  {username: "Jamey", sex: "male", age: 20, location: "San Francisco", bio: "wek", image: ""}
];

// Jame.remove({}, function(err, jame){

  Jame.create(james_list, function(err, james){
    if (err) { return console.log(err); }
    console.log("created", james.length, "james");
    process.exit();
  });

// });
