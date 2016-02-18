(function(angular){
/* use strict */
var controllers = angular.module('controllers', ['services'])
controllers.controller('mainController', ['$scope','displayService', function($scope,displayService) {
  $scope.firstTab = "Features";
  $scope.secondTab = "Contact";
  $scope.sayHello = displayService.displayHello();
  $scope.sayGoodBye = displayService.sayGoodBye();
}]);

})(window.angular);
