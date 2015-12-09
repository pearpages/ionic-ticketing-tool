(function() {
	'use strict';

	angular.module("ticketing-chats",[])
	.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tab.chats', {
  	url: '/chats',
  	
  			templateUrl: 'js/chats/chats.html',
  			controller: 'ChatsController',
  			controllerAs: 'vm'


  })
  .state('tab.chat-detail', {
  	url: '/chats/:chatId',

  			templateUrl: 'js/chats/detail.html',
  			controller: 'DetailController',
  			controllerAs: 'vm'

  });

});
})();