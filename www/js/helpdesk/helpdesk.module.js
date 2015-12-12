(function() {
    'use strict';
    angular.module("helpdesk",[])
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider

      .state('tab.inbox', {
        url: '/helpdesk',
                templateUrl: 'js/helpdesk/inbox.html',
                controller: 'InboxController',
                controllerAs: 'vm'
      })
      .state('tab.ticket-detail', {
        url: '/helpdesk/ticket/:id',

                templateUrl: 'js/helpdesk/detail.html',
                controller: 'DetailController',
                controllerAs: 'vm',
                params: {
                  'id' : -1,
                  'assign' : false
                }
      })
      .state('tab.assigned-to-me', {
        url: '/helpdesk/assigned-to-me',
            templateUrl: 'js/helpdesk/assigned-to-me.html',
      })
      .state('tab.assign', {
        url: '/helpdesk/assign/:id',
            template: 'hello!!'
      })
      .state('tab.last-closed', {
        url: '/helpdesk/last-closed',
            templateUrl: 'js/helpdesk/last-closed.html',
            controller: 'ClosedController',
            controllerAs: 'vm'
      });

    });
})();