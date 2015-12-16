/**
 *
 * Unused module. Only for learning purposes.
 * It is a good example for tabs and view inheritance.
 * @see  js/chats/README.md
 */
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
  	url: '/chats/whatever/:chatId',

  			templateUrl: 'js/chats/detail.html',
  			controller: 'DetailController',
  			controllerAs: 'vm'

  })

  .state('tab.chat-a-test', {
    url: '/chats/a-test',
        templateUrl: 'js/chats/a-test.html',
  });

});
})();