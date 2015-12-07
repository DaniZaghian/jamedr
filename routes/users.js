var express = require('express');
var userRouter = express.Router();

var User = require('../models/user.js');





// signup route
userRouter.get('/signup', function (req, res) {
    req.currentUser(function (err, user) {
   //  // redirect if current user
     if (user) {
       res.redirect('profile');
     } else {
      res.render('signup');
     }
   });
});

//user submits the signup form
userRouter.post('/login', function (req, res) {
  // grab user data from params (req.body)
  var newUser = req.body.user;
  // create new user with secure password
  User.User.createSecure(newUser.username, newUser.password, function (err, user) {
    //req.session.userId = newUser._id;
    res.redirect('/login');
  });
});


// login route (renders login view)
userRouter.get('/login', function (req, res) {
  req.currentUser(function (err, user) {
   //  // redirect if current user
     if (user) {
       res.redirect('profile');
     } else {
      res.render('login');
     }
   });
});

// authenticate user and set session
userRouter.post('/login', function (req, res) {
  var userData = req.body.user;
  User.User.authenticate(userData.username, userData.password, function (err, user) {
    req.login(user);
    //redirect to user profile
    res.redirect('/profile');
  });
});





userRouter.route('/')  // translates to '/api/posts/'
  // send all posts
  .get(function(request, response){
      User.find().exec(function(err, users) {
      if (err) { return response.status(404).send(err); }
      response.send(users); 
    });    
  })
  // create new post
  .post(function(req,res){  
   // var post = new Post({ content: req.body.content });
   // post.save(function (err, post) {
    User.create({bio: req.body.bio}, function(err, user){
      if (err) { return res.send(err); }
      console.log(user);
      res.status(201).send(user);
    });
  });

userRouter.route('/:user_id')   // translates to '/api/posts/:post_id'
  // send one post by id
  .get(function(req,res){   
    User.findById(req.params.user_id, function(err, user) {
      if (err) { return res.status(404).send(err); }
      res.send(user); 
    });
  })

  // full update of one post by id
  .put(function(req,res){ 
    User.findOneAndUpdate({ _id: req.params.user_id}, req.query.post, function (err, user) {
      if (err) { return res.send(err); }
      res.send(user);
    });
  })

  // delete one post by id
  .delete(function(req,res){   
    User.findByIdAndRemove(req.params.user_id, function (err, user) {
      if (err) { return res.send(err); }
      res.status(200).send('Success');
    });
  });




module.exports = userRouter;