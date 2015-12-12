(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('ClosedController',['myTickets','NgTableParams','$state',ClosedController]);

    function ClosedController(myTickets,NgTableParams,$state) {
        var vm = this;

        vm.closedTickets = null;
        vm.gotoDetail = gotoDetail;
        activate();

        function activate() {
            var data = myTickets.getClosed();
            vm.closedTickets = new NgTableParams({count:data.length, sorting: {notified:'desc'}},{data: data, counts: []});
        }

        function gotoDetail(ticket) {
            $state.go('tab.ticket-detail', {id: ticket.id, back: 'tab.last-closed'});
        }
    }
})();