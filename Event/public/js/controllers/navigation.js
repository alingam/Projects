
function NavigationController($scope, $location, Global) {
    $scope.navClass = function (page,class_name) {
        var currentRoute = $location.path().substring(1).split("/")[0] || 'events';
        return page === currentRoute ? class_name : '';
    };

    $scope.subnavClass = function (page) {
        var currentRoute = $location.path().substring(1).split("/")[1] || '';

        return page === currentRoute ? 'active' : '';
    };
}
