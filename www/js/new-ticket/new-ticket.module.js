(function() {
	'use strict';
	angular.module("new-ticket",[])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('tab.new-ticket', {
			url: '/new-ticket',
			views: {
				'tab-new-ticket' : {
					templateUrl: 'js/new-ticket/new-ticket.html',
					controller: 'NewTicketController',
					controllerAs: 'vm'	
				}
			}
			
		});
	});
})();