(function() {
	'use strict';

	angular.module("ticketing-dash",['ticketing-users'])
	.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

 
  .state('tab.dash', {
  	url: '/dash',
  	views: {
  		'tab-dash': {
  			templateUrl: 'js/dash/dash.html',
  			controller: 'DashController',
  			controllerAs: 'vm'
  		}
  	}
  });
 

});
})();