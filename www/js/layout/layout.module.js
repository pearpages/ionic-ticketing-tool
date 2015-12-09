(function() {
	'use strict';
	angular.module("ticketing-layout",[])
		.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
  	url: '/tab',
  	abstract: true,
  	templateUrl: 'js/layout/layout.html',
    controller: 'LayoutController'
  });


});
})();