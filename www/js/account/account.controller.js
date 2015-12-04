(function() {
	'use strict';

	angular.module("ticketing-account")
	.controller('AccountController',[AccountController]);

	function AccountController() {

		var vm = this;
		vm.settings;

		activate();

		function activate() {
			vm.settings = {
    			enableFriends: true
  			};
		}
	}
})();