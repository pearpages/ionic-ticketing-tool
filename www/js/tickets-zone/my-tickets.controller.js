(function() {
    'use strict';

    angular.module("tickets-zone")
    .controller('MyTicketsController',['myUsers','myTickets','NgTableParams',MyTicketsController]);

    function MyTicketsController(myUsers,myTickets,NgTableParams) {
        var vm = this;

        vm.who = null;
        vm.requested = null;
        vm.view = null;
        vm.ticketDetail = null;
        vm.back = null;
        vm.setView = setView;
        vm.viewDetail = viewDetail;
        vm.badgeColor = badgeColor;
        
        activate();

        function activate() {
            myUsers.isLogged();

            vm.view = 'my'; //can also be 'others'
            if(myUsers.getCurrentUser()){
                var data = myTickets.getUserTickets(myUsers.getCurrentUser().id);

                vm.who = new NgTableParams({count:data.who.length, sorting: {status:'desc',notified:'desc'}},{data: data.who, counts: []});
                vm.requested = new NgTableParams({count:data.requested.length, sorting: {status:'desc',notified:'desc'}},{data: data.requested, counts: []});
            }
            
        }

        function badgeColor(status) {
            if(status === 'open'){
                return 'badge-balanced';
            } else if (status === 'closed') {
                return 'badge-assertive';
            }
        }

        function setView(view) {
            vm.view = view;
        }

        function viewDetail(ticketId,backButton) {
            
            vm.ticketDetail = myTickets.find(ticketId);
            vm.view = 'detail';
            vm.back = backButton;
        }
    }
})();