(function() {
	'use strict';

	angular.module("ticketing-account")
	.controller('AccountController',['$state','myUsers','myTickets','myTicketsMocks','$ionicLoading','$timeout',AccountController]);

	function AccountController($state,myUsers,myTickets,myTicketsMocks,$ionicLoading,$timeout) {

		var vm = this;

		vm.user = null;
		vm.form = null;
		vm.validateUser = validateUser;
		vm.hideErrorMessage = hideErrorMessage;
		vm.logout = logout;
		vm.mock = mock;

		activate();

		function activate() 
		{	
			vm.form = {};
			vm.form.userid = null;
			vm.form.password = null;
			vm.form.message = null;
			vm.user = myUsers.getCurrentUser();
		}

		function hideErrorMessage() {
			vm.form.message = null;
		}

		function mock() {
			myTicketsMocks.mockTickets(50,myTickets,vm.user.id); 
		}

		function showLoading() {
			$ionicLoading.show({
				template: 'Validating...'
			});
		}

		function hideLoading() {
			$timeout(function() {
				vm.user = myUsers.validateUser(vm.form.userid,vm.form.password);
				if(vm.user === null){
					vm.form.message = 'Wrong password';
					console.log(vm.user,vm.form.message);
				}else{
					$state.reload();
				}
				$ionicLoading.hide();				
			},1000);
		}

		function validateUser() {
			showLoading();
			hideLoading();
		}

		function logout() {
			myUsers.logout();
			vm.user = null;
			$state.reload();
		}

	}
})();