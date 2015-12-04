(function() {
	'use strict';

	angular.module("ticketing")
	.config(function($stateProvider, $urlRouterProvider) {

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/tab/dash');

	});
})();