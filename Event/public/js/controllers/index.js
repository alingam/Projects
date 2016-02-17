function IndexController($scope,$location,Global,Events,$rootScope){
    $scope.global = Global;
    $scope.eventsList = [];

    $scope.$on('$locationChangeStart',function(evt, absNewUrl, absOldUrl) {
        //console.log('start',absNewUrl, absOldUrl);
        $scope.newUrl =  absNewUrl;
        $scope.oldUrl =  absOldUrl;
    });
    $scope.$on('$locationChangeSuccess',function(evt, absNewUrl, absOldUrl) {
        //console.log('success', absNewUrl, absOldUrl);
        $scope.newUrl =  absNewUrl;
        $scope.oldUrl =  absOldUrl;
    });


    $scope.eventDetails = function (class_name) {
        var eventId = $location.path().substring(1).split("/")[1],
            excludeArr = ["create","suggested","calendar"];
        if(excludeArr.indexOf(eventId) >= 0) {
            eventId = false;
        }
        try {
           $(window).resize();
        }   catch (e) {

        }
        var    value =  (eventId) ? class_name : '';
        return  value;
    };

    $scope.getEventId = function(str) {
        var rest = str.substring(0, str.lastIndexOf("/") + 1);
        return str.substring(str.lastIndexOf("/") + 1, str.length);
    }

    $scope.find = function (query) {

        var str = $scope.oldUrl,
            rest = str.substring(0, str.lastIndexOf("/") + 1);
            oldeventId = $scope.getEventId($scope.oldUrl),
            neweventId = $scope.getEventId($scope.newUrl),
            excludeArr = ["create","suggested","calendar","","/","events"];

        if(excludeArr.indexOf(oldeventId) >=0 || !oldeventId) {
            eventId = false;
        }


        if((oldeventId == false) || (neweventId && oldeventId && oldeventId == neweventId)) {
            Events.query(query, function (events) {
                $scope.eventsList = $rootScope.eventsList = events;
            });
        }  else {
            $scope.eventsList = $rootScope.eventsList
        }
    }
      

}