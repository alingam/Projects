(function(){
/* use strict */
var sampleService = angular.module('mainService', [])
sampleService.factory('displayService', function() {
  var displayHello = function(){
  	console.log("Inside display hello function of service");
  	return "Hello"
  }

  var sayGoodBye = function(){
  	console.log("Inside say sayGoodBye function of service")
  	return "Good Bye"
  }

  return {
    displayHello: displayHello,
    sayGoodBye: sayGoodBye
  };
});

})();

