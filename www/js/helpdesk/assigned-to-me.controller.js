(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('AssignedToMeController',['myTickets','NgTableParams',AssignedToMeController]);

    function AssignedToMeController(myTickets,NgTableParams) {
        var vm = this;

        vm.myTickets = null;

        activate();

        function activate() {
            var data = myTickets.getMine();
            vm.notAssigned = new NgTableParams({count:data.length, sorting: {notified:'desc'}},{data: data, counts: []});
        }
    }
})();