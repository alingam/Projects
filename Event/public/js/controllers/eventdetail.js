function EventDetailController($scope, $filter, $routeParams, $location, Global, Events) {

    var eventId = $location.path().substring(1).split("/")[1];
    if(eventId) {
        $scope.$watch("eventsList", function (data) {


           var currentIndex = $filter('getIndexByField')(data, eventId,"_id"),
               prev = data[currentIndex - 1],
               next =  data[currentIndex + 1];

           $scope.previousevent =  prev;
           $scope.nextevent =  next;
           $scope.eventdetail = $filter('getObjByField')(data, eventId,"_id");

        });

    }

};
