/**
 * New tickets not assigned yet
 */
(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('InboxController',['myTickets','NgTableParams','$state','myLoading',InboxController]);

    function InboxController(myTickets,NgTableParams,$state,myLoading) {
        var vm = this;

        vm.notAssigned = null;
        vm.gotoDetail = gotoDetail;

        activate();

        function activate() {
            myLoading.loading(function() {
                var data = myTickets.getNotAssigned();
                vm.notAssigned = new NgTableParams({count:data.length, sorting: {notified:'desc'}},{data: data, counts: []});
            });
        }
        
        function gotoDetail(ticket) {
            var params = {id: ticket.id};
            $state.go('tab.ticket-detail', params);
        }
    }
})();