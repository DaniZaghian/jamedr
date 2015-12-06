var express = require('express');
var userRouter = express.Router();

var User = require('../models/user.js');

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
    User.findByIdAndRemove(req.params.user, function (err, user) {
      if (err) { return res.send(err); }
      res.status(200).send('Success');
    });
  });

module.exports = userRouter;