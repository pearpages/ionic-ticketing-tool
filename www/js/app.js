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
  'tickets-mocks',
  'helpdesk'
  ])

.run(function($ionicPlatform) {
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

  });
});
