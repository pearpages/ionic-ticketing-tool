/**
 * All closed tickets.
 */
(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('ClosedController',['myTickets','NgTableParams','$state','myLoading',ClosedController]);

    function ClosedController(myTickets,NgTableParams,$state,myLoading) {
        var vm = this;

        vm.closedTickets = null;
        vm.gotoDetail = gotoDetail;
        activate();

        function activate() {
            myLoading.loading(function() {
                var data = myTickets.getClosed();
                vm.closedTickets = new NgTableParams({count:data.length, sorting: {notified:'desc'}},{data: data, counts: []});
            });
        }

        function gotoDetail(ticket) {
            $state.go('tab.ticket-detail', {id: ticket._id, back: 'tab.last-closed'});
        }
    }
})();