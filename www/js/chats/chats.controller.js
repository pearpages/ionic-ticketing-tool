(function() {
	'use strict';

	angular.module("ticketing-chats")
	.controller('ChatsController',['myUsers','Chats',ChatsController]);

	function ChatsController(myUsers,Chats) {

		var vm = this;

		vm.chats; 
		vm.remove = remove;
  
  		activate();

  		function activate() {
        myUsers.isLogged();
  			vm.chats = Chats.all();
  		}

  		function remove(chat) {
  			Chats.remove(chat);
  		}
  
  	}

})();