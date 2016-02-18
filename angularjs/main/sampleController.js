angular.module('sampleApp')
.controller('sampleController',['$scope','sampleService',function ($scope,sampleService){
	console.log("inside the sample controller");
	$scope.firstTab = "Features";
  	$scope.secondTab = "Contact";
  	$scope.sayHello = sampleService.sayHello();

}]);


