/**
 * Created by sp_farm on 12/3/2014.
 */
(function () {
	"use strict";

	var app = angular.module('app');
	app.controller('subredditCtrl', function($scope, subredditService){
		var defaultSubreddit = 'bycycling';
		var selectedSubreddit = defaultSubreddit;
		var callSubredditService = function(){
			subredditService.getSubredditPostsTitle(selectedSubreddit).then(function(postsTitles){
				$scope.postsTitles = postsTitles;
			});
		};
		$scope.changed = function(){
			selectedSubreddit = $scope.subreddits;
			callSubredditService();
		};

		callSubredditService();
	})
})();