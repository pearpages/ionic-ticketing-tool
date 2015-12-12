(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('ClosedController',['myTickets','NgTableParams',ClosedController]);

    function ClosedController(myTickets,NgTableParams) {
        var vm = this;

        vm.closedTickets = null;
        activate();

        function activate() {
            var data = myTickets.getClosed();
            vm.closedTickets = new NgTableParams({count:data.length, sorting: {notified:'desc'}},{data: data, counts: []});
        }
    }
})();