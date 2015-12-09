(function() {
	'use strict';

	angular.module("ticketing-account",['ticketing-users'])
	.config(function($stateProvider, $urlRouterProvider) {

		  // Ionic uses AngularUI Router which uses the concept of states
		  // Learn more here: https://github.com/angular-ui/ui-router
		  // Set up the various states which the app can be in.
		  // Each state's controller can be found in controllers.js
		  $stateProvider
		  .state('tab.account', {
		  	url: '/account',
		  	views: {
		  		'tab-account': {
		  			templateUrl: 'js/account/account.html',
		  			controller: 'AccountController',
		  			controllerAs: 'vm'
		  		}
		  	}
		  });

		});
})();
