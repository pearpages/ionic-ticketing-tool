(function() {
	'use strict';

	angular.module("ticketing-account")
	.controller('AccountController',['$state','myUsers','myTickets',AccountController]);

	function AccountController($state,myUsers,myTickets) {

		var vm = this;

		vm.logged = null;
		vm.user = null;
		vm.validateUser = validateUser;
		vm.logout = logout;
		vm.mock = mock;

		activate();

		function mock() {
			if(myTickets.size() === 0){
				myTickets.mockTickets(10,myTickets,vm.user.id); 
			}
		}

		function activate() {
			vm.user = myUsers.getCurrentUser();
			if(vm.user){
				vm.logged = true;
			}else{
				vm.logged = false;
			}
		}

		function validateUser() {
			vm.logged = myUsers.validateUser(vm.user);
			vm.user = myUsers.getCurrentUser();
			$state.reload();
		}

		function logout() {
			myUsers.logout();
			vm.logged = false;
			vm.user = null;
			$state.reload();
		}

	}
})();