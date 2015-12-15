(function() {
	'use strict';

	angular.module("tickets-zone")
	.controller('EvaluateController',['$state','myTickets',EvaluateController]);

	function EvaluateController($state,myTickets) {

		var vm = this;

		vm.ticket = null;
		vm.goBack = goBack;
		vm.submit = submit;
		vm.setMark = setMark;
		vm.isActive = isActive;

		activate();

		function activate() {
			vm.ticket = myTickets.find($state.params.id);
		}

		function goBack() {
			vm.ticket.evaluation = null;
			$state.go('tab.my-tickets',{view: 'evaluate'});
		}

		function submit() {
			$state.go('tab.my-tickets',{view: 'evaluate'});	
		}

		function setMark(mark) {
			vm.ticket.evaluation = mark;
		}

		function isActive() {
			if(vm.ticket.evaluation){
				return 'positive';
			} else {
				return '';
			}
		}

	}
})();