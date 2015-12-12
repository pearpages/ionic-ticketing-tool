(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('InboxController',['myTickets','NgTableParams',InboxController]);

    function InboxController(myTickets,NgTableParams) {
        var vm = this;

        vm.notAssigned = null;

        activate();

        function activate() {
            var data = myTickets.getNotAssigned();
            vm.notAssigned = new NgTableParams({count:data.length, sorting: {notified:'desc'}},{data: data, counts: []});
        }
        

    }
})();