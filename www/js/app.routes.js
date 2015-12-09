(function() {
	'use strict';

	angular.module("ticketing")
	.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        //disabling cache globally
    $ionicConfigProvider.views.maxCache(0);

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/tab/dash');

	});
})();