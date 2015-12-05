(function() {
	'use strict';

	angular.module("ticketing-account")
	.controller('AccountController',[AccountController]);

	function AccountController() {

		var vm = this;

		vm.logged;
		vm.user;
		vm.validateUser = validateUser;

		activate();

		function activate() {
			vm.logged = false;

			vm.user = {
				name: '',
				password: ''
			};
		}

		function validateUser() {
			if(vm.user.name == vm.user.password){
				vm.logged = true;
			}else{
				vm.logged = false;
				alert('Wrong Password');
			}
		}
	}
})();