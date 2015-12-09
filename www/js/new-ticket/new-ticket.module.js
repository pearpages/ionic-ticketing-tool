(function() {
	'use strict';
	angular.module("new-ticket",['my-tickets'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('tab.new-ticket', {
			url: '/new-ticket',
			
					templateUrl: 'js/new-ticket/new-ticket.html',
					controller: 'NewTicketController',
					controllerAs: 'vm'	
			
			
			
		});
	});
})();