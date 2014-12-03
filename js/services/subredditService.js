/**
 * Created by sp_farm on 12/3/2014.
 */
(function () {
	"use strict";

	var app = angular.module('app');
	app.service('subredditService', function ($http) {

		return {
			getSubredditPostsTitle: function (subredditName) {
				return $http.get('http://www.reddit.com/r/' + subredditName + '/.json')
					.then(function (response) {
						var posts, postsTitles = [];
						posts = response.data.children;
						for (var i = 0; i < posts.length; i++) {
							postsTitles.push(posts[i].data.title);
						}
						return postsTitles;
					});
			}
		};
	});
})();