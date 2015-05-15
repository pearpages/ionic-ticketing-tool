'use strict';

/**
 * @ngdoc function
 * @name ticketingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ticketingApp
 */
angular.module('ticketingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
