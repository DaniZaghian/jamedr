/*
 * Post Resource
 */

var Post = require('../models/post');

module.exports = function(app) {
  // INDEX
  app.get('/api/posts', function (req, res) {
    Post.find().sort('-created_at').exec(function(err, posts) {
      if (err) { return res.status(404).send(err) };
      res.status(200).json(posts); // return all nerds in JSON format
    });
  });

  // CREATE
  app.post('/api/posts', function (req, res) {
    var post = new Post({
        body: req.body.body
      , room_name: req.body.roomName
    });
    console.log(post);
    post.save(function (err, post) {
      console.log('post saved')
      if (err) { return res.send(err) };
      res.status(201).json(post) 
    });
  });

  // SHOW
  app.get('/api/posts/:id', function (req, res) {
    Post.findById(req.params.id, function(err, post) {
      console.log('blah')
      if (err) { return res.status(404).send(err) };
      res.status(200).json(post); 
    });
  });

  // UPDATE
  app.put('/api/posts/:id', function (req, res) {
    Post.findOneAndUpdate({ _id: req.params.id}, req.query.post, function (err, post) {
      if (err) { return res.send(err) }
      res.status(200).json(post)
    });
  });

  // DESTROY
  app.delete('/api/posts/:id', function (req, res) { 
    Post.findByIdAndRemove(req.params.id, function (err, post) {
      if (err) { return res.send(err) }
      res.status(200);
    });
  });
}