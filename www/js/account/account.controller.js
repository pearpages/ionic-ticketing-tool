(function() {
	'use strict';

	angular.module("ticketing-account")
	.controller('AccountController',['$state','myUsers','myTickets',AccountController]);

	function AccountController($state,myUsers,myTickets) {

		var vm = this;

		vm.logged;
		vm.user;
		vm.validateUser = validateUser;
		vm.logout = logout;

		activate();

		function mock() {
			if(myTickets.size() === 0){
				myTickets.mockTickets(30,myTickets,vm.user.id); 
			}
		}

		function activate() {
			vm.logged = myUsers.isLogged();
			vm.user = myUsers.getCurrentUser();
			
			if(myUsers.getCurrentUser()){
				mock(); //remove this	
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