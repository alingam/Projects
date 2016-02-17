//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/articles', { templateUrl: 'views/articles/list.html' }).
	when('/articles/create', { templateUrl: 'views/articles/create.html' }).
	when('/articles/:articleId/edit', { templateUrl: 'views/articles/edit.html' }).
	when('/articles/:articleId', { templateUrl: 'views/articles/view.html' }).
	when('/', { templateUrl: 'views/index.html' }).
	otherwise({redirectTo: '/'});

    $routeProvider.
        when('/events', { templateUrl: 'views/index.html' }).
        when('/events/create', { templateUrl: 'views/events/create.html' }).
        when('/events/suggested', { templateUrl: 'views/events/suggested.html' }).
        when('/events/calendar', { templateUrl: 'views/events/calendar.html' }).
        when('/events/archived-videos', { templateUrl: 'views/events/calendar.html' }).
        //when('/events/:eventId', { resolve: { controller: "EventDetailController" } }).
        when('/events/:eventId', { templateUrl: 'views/index.html'}).
        when('/events/', { templateUrl: 'views/index.html'}).
        when('/', { templateUrl: 'views/index.html' }).
        otherwise({redirectTo: '/'});


    $routeProvider.
        when('/broadcast', { templateUrl: 'views/broadcast/index.html' }).
        when('/broadcast/broad1', { templateUrl: 'views/broadcast/broad1.html' }).
        when('/broadcast/broad2', { templateUrl: 'views/broadcast/broad2.html' });


    $routeProvider.
        when('/meetup', { templateUrl: 'views/meetup/index.html' }).
        when('/meetup/meetup1', { templateUrl: 'views/meetup/meetup1.html' }).
        when('/meetup/meetup2', { templateUrl: 'views/meetup/meetup2.html' });

    $routeProvider.
        when('/contact', { templateUrl: 'views/contact/index.html' });
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);