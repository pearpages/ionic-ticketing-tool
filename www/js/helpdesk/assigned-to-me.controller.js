(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('AssignedToMeController',['myTickets','NgTableParams','$state','myLoading',AssignedToMeController]);

    function AssignedToMeController(myTickets,NgTableParams,$state,myLoading) {
        var vm = this;

        vm.myTickets = null;
        vm.gotoDetail = gotoDetail;

        activate();

        function activate() {
            myLoading.loading(function() {
                var data = myTickets.getMine();
                vm.notAssigned = new NgTableParams({count:data.length, sorting: {notified:'desc'}},{data: data, counts: []});    
            });
            
        }

        function gotoDetail(ticket) {
            var params = {id: ticket.id};
            $state.go('tab.ticket-detail', params);
        }
    }
})();