(function() {
	'use strict';

	angular.module("ticketing-dash")
	.controller('DashController',['myUsers',DashController]);

	function DashController(myUsers) {

        activate();

        function activate() {
          myUsers.isLogged();
        }
	}
})();