/**
 * Adds an evaluation mark to a ticket.
 */
(function() {
    'use strict';

    angular.module("tickets-zone")
        .controller('EvaluateController', ['$state', 'myTickets', '$ionicLoading', '$timeout', EvaluateController]);

    function EvaluateController($state, myTickets, $ionicLoading, $timeout) {

        var vm = this;

        vm.ticket = null;
        vm.goBack = goBack;
        vm.submit = submit;
        vm.setMark = setMark;
        vm.isActive = isActive;

        activate();

        function activate() {
            myTickets.find($state.params.id).then(function success(response) {
                vm.ticket = response.data;
            }, function error(response) {
                console.log(response);
            });
        }

        function goBack() {
            vm.ticket.evaluation = null;
            $state.go('tab.my-tickets', {
                view: 'evaluate'
            });
        }

        function submit() {
            if (typeof vm.ticket.save !== 'function') {
                $ionicLoading.show({
                    template: 'Saving...'
                });
                myTickets.save(vm.ticket, function() {
                    $ionicLoading.hide();
                    $state.go('tab.my-tickets', {
                        view: 'evaluate'
                    });
                });
            } else {
                $ionicLoading.show({
                    template: 'Saving...'
                });
                $timeout(1000, function() {
                    $ionicLoading.hide();
                    $state.go('tab.my-tickets', {
                        view: 'evaluate'
                    });
                });
            }

        }

        function setMark(mark) {
            vm.ticket.evaluation = mark;
        }

        function isActive() {
            if (vm.ticket.evaluation !== null) {
                return 'positive';
            } else {
                return '';
            }
        }

    }
})();
