(function() {
	'use strict';

	angular.module("ticketing-chats")
	.controller('DetailController',[ '$stateParams', 'Chats', DetailController]);

	function DetailController($stateParams,Chats) {

		var vm = this;

		vm.chat;

		activate();

		function activate() {
			vm.chat = Chats.get($stateParams.chatId);
		}

	}
})();