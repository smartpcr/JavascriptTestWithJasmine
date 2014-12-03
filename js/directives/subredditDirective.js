/**
 * Created by sp_farm on 12/3/2014.
 */
(function () {
	"use strict";

	var app = angular.module('app');
	app.directive('subredditHeader', function(){
		return {
			restrict: 'E',
			scope: {
				text: '@'
			},
			templateUrl: 'js/templates/cycleRelatedSubredditHeaderTemp.html'
		};
	})
})();