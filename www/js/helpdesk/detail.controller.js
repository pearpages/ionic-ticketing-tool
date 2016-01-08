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
                myTickets.find($state.params.id).then(function success(response) {
                    vm.ticket = response.data;
                },function error(response) {
                    console.log(response);
                });
            });
        }

        function goBack() {
            $state.go(vm.backTo);
        }
    }
})();