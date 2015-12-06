/*
 * INDEX RESOURCES
 */

exports.index = function(req, res){
  res.render('index');
};

exports.templates = function (req, res) {
  var name = req.params.name;
  res.render('templates/' + name);
};

exports.userRouter =  require('./users.js');
exports.jameRouter =  require('./james.js');