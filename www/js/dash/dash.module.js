(function() {
	'use strict';

	angular.module("ticketing-dash",[])
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