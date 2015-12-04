(function() {
	'use strict';
	angular.module("new-ticket",[])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('new-ticket', {
			url: '/new-ticket',
			templateUrl: 'js/new-ticket/new-ticket.html',
			controller: 'NewTicketController',
			controllerAs: 'vm'
		});
	});
})();