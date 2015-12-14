angular.module('ticketing', [
  'ionic',
  'ionic.service.core',
  'ticketing-users',
  'ticketing-layout',
  'ticketing-chats',
  'ticketing-account',
  'new-ticket',
  'tickets-zone',
  'ngTable',
  'ngCordova',
  'tickets-mocks',
  'helpdesk'
  ])

.run(function($ionicPlatform,$state,myUsers) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      //cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if(myUsers.getCurrentUser() === null){
      $state.go('tab.account');
    }
  });
});
