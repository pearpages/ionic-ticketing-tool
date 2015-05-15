'use strict';

/**
 * @ngdoc function
 * @name ticketingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ticketingApp
 */
angular.module('ticketingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
