var express = require('express');
var jameRouter = express.Router();

var Jame = require('../models/jame.js');

jameRouter.route('/')  // translates to '/api/posts/'
  // send all posts
  .get(function(request, response){
      Jame.find().exec(function(err, james) {
      if (err) { return response.status(404).send(err); }
      response.send(james); 
    });    
  })
  // create new post
  .post(function(req,res){  
   // var post = new Post({ content: req.body.content });
   // post.save(function (err, post) {
    Jame.create({bio: req.body.bio}, function(err, jame){
      if (err) { return res.send(err); }
      console.log(jame);
      res.status(201).send(jame);
    });
  });

jameRouter.route('/:id')   // translates to '/api/james/:id'
  // send one post by id
  .get(function(req,res){   
    Jame.findById(req.params.user_id, function(err, jame) {
      if (err) { return res.status(404).send(err); }
      res.send(jame); 
    });
  })

  // full update of one post by id
  .put(function(req,res){ 
    Jame.findOneAndUpdate({ _id: req.params.id}, req.query.post, function (err, user) {
      if (err) { return res.send(err); }
      res.send(jame);
    });
  })

  // delete one post by id
  .delete(function(req,res){   
    Jame.findByIdAndRemove(req.params.id, function (err, jame) {
      if (err) { return res.send(err); }
      res.status(200).send('Success');
    });
  });

module.exports = jameRouter;