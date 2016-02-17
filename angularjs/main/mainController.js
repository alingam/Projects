(function(angular){
/* use strict */
var sampleApp = angular.module('sampleApp', ['mainService'])
sampleApp.controller('mainController', ['$scope','displayService', function($scope,displayService) {
  $scope.firstTab = "Features";
  $scope.secondTab = "Contact";
  $scope.sayHello = displayService.displayHello();
  $scope.sayGoodBye = displayService.sayGoodBye();
}]);

})(window.angular);
