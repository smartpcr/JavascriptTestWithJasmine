'use strict';

describe('subreddit controller', function(){
	var $controller, $scope, subredditService, q, deferred;

	beforeEach(function(){
		subredditService = {
			getSubredditPostsTitles: function(subredditName){
				deferred = q.defer();
				deferred.resolve(['testing with jasmine', 'testing with QUnit', 'testing with mocha']);
				return deferred.promise;
			}
		}
	});

	beforeEach(module('app'));

	beforeEach(inject(function($controller, $rootScope, $q, _subredditService_){
		$scope = $rootScope.$new();
		q = $q;
		$controller('subredditCtrl',{
			$scope: $scope,
			subredditService: subredditService
		});
	}));

	it('should call the subredditService again if onchange event is fired', function(){
		$scope.$apply();
		expect($scope.postsTitles).toEqual(['testing with jasmine', 'testing with QUnit', 'testing with mocha']);

		$scope.postsTitles ='';
		$scope.changed();
		$scope.$digest();
		expect($scope.postsTitles).toEqual(['testing with jasmine', 'testing with QUnit', 'testing with mocha']);
	});
});