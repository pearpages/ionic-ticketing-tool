(function() {
	'use strict';

	angular.module("ticketing-account")
	.controller('AccountController',['$state','myUsers',AccountController]);

	function AccountController($state,myUsers) {

		var vm = this;

		vm.logged;
		vm.user;
		vm.validateUser = validateUser;
		vm.logout = logout;

		activate();

		function activate() {
			vm.logged = myUsers.isLogged();
			vm.user = myUsers.getCurrentUser();
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