/**
 * Ticket detail information for a given :id
 */
(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('DetailController',['$state','myTickets','myLoading',DetailController]);

    function DetailController($state,myTickets,myLoading) {
        var vm = this;

        vm.ticket = null;
        vm.backTo = null;
        vm.goBack = goBack;

        activate();

        function activate() {
            myLoading.loading(function() {
                vm.backTo = $state.params.back;
                vm.ticket = myTickets.find($state.params.id);
            });
        }

        function goBack() {
            $state.go(vm.backTo);
        }
    }
})();