angular.module('myApp').
directive('jame', jameView);

function jameView(){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_jameView.html";
  return directive;
}