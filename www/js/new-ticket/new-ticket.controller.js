(function() {
	'use strict';

	angular.module("new-ticket")
	.controller('NewTicketController',['myUsers',NewTicketController]);

	function NewTicketController(myUsers) {
		var vm = this;

		vm.ticket = null;

        activate();

        function activate() {
            myUsers.isLogged();
        }
	}
})();