(function() {
	'use strict';

	angular.module("ticketing-account")
	.controller('AccountController',['$state','myUsers','myTicketsMocks',AccountController]);

	function AccountController($state,myUsers,myTicketsMocks) {

		var vm = this;

		vm.user = null;
		vm.form = null;
		vm.validateUser = validateUser;
		vm.logout = logout;
		vm.mock = mock;

		activate();

		function activate() 
		{	
			vm.form = {};
			vm.form.userid = null;
			vm.form.password = null;
			vm.user = myUsers.getCurrentUser();
		}

		function mock() {
			myTicketsMocks.mockTickets(100,myTickets,vm.user.id); 
		}

		function validateUser() {
			vm.user = myUsers.validateUser(vm.form.userid,vm.form.password);
			$state.reload();
		}

		function logout() {
			myUsers.logout();
			vm.user = null;
			$state.reload();
		}

	}
})();