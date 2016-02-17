//Articles service used for articles REST endpoint
window.app.factory("Events", function($resource){
	return $resource('events/:eventId', {eventId:'@_id'}, {update: {method: 'PUT'}});
});