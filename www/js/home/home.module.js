(function() {
	'use strict';
	angular.module("ticketing-home",[])
		.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
  	url: '/tab',
  	abstract: true,
  	templateUrl: 'js/home/home.html',
    controller: 'HomeController',
    controllerAs: 'vm'
  });


});
})();