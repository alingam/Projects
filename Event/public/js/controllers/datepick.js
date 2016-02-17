var app = angular.module('angularjs-starter', ['$strap.directives']);

app.controller('MainCtrl', function($scope, $window, $location) {

    // Datepicker directive
    $scope.datepicker = {date: new Date("2012-09-01T00:00:00.000Z")};

});