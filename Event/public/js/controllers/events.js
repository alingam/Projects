function EventsController($scope, $routeParams, $location, Global, Events) {
	$scope.global = Global;

	$scope.create = function () {
		var event = new Events({ title: this.title,
            venue: this.venue,
            location:this.location ,
            description:this.description,
            startDate:$('#sDate').val(),
            startTime:$('#sTime').val(),
            endDate:$('#eDate').val(),
            endTime:$('#eTime').val(),
            imageUrl:$('#image').attr('src'),
            webAddress:this.webAddress,
            eventType:this.eventType,
            eventTemplate:$('.cke_wysiwyg_frame').contents().find("html").html(),
            broadcast:this.broadcast});
		event.$save(function (response) {
			$location.path("events/" + response._id);
		});

		this.title = "";
		this.content = "";
	};

    $scope.onFileSelect = function($files) {
        //$files: an array of files selected, each file has name, size, and type.
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            console.log("file to be uploaded: "+$files[i])
            $http.uploadFile({
                url: 'my/upload/url',
                file: $file
            }).then(function(data, status, headers, config) {
                    // file is uploaded successfully
                    console.log(data);
                });
        }
    }

	/*$scope.remove = function (article) {
		article.$remove();

		for (var i in $scope.articles) {
			if ($scope.articles[i] == article) {
				$scope.articles.splice(i, 1)
			}
		}
	};

	$scope.update = function () {
		var article = $scope.article;
		if (!article.updated) {
			article.updated = [];
		}
		article.updated.push(new Date().getTime());

		article.$update(function () {
			$location.path('articles/' + article._id);
		});
	};

	$scope.find = function (query) {
		Articles.query(query, function (articles) {
			$scope.articles = articles;
		});
	};

	$scope.findOne = function () {
		Articles.get({ articleId: $routeParams.articleId }, function (article) {
			$scope.article = article;
		});
	};*/
}