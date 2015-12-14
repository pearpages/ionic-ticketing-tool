(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('AssignedToMeController',['myTickets','NgTableParams','$state',AssignedToMeController]);

    function AssignedToMeController(myTickets,NgTableParams,$state) {
        var vm = this;

        vm.myTickets = null;
        vm.gotoDetail = gotoDetail;

        activate();

        function activate() {
            var data = myTickets.getMine();
            vm.notAssigned = new NgTableParams({count:data.length, sorting: {notified:'desc'}},{data: data, counts: []});
        }

        function gotoDetail(ticket) {
            var params = {id: ticket.id, assign: true};
            $state.go('tab.ticket-detail', params);
        }
    }
})();