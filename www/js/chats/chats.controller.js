(function() {
	'use strict';

	angular.module("ticketing-chats")
	.controller('ChatsController',['Chats',ChatsController]);

	function ChatsController(Chats) {

		var vm = this;

		vm.chats; 
		vm.remove = remove;
  
  		activate();

  		function activate() {
  			vm.chats = Chats.all();
  		}

  		function remove(chat) {
  			Chats.remove(chat);
  		}
  
  	}

})();