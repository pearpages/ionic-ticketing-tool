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
        
        activate();

        function activate() {
            myUsers.isLogged();

            vm.view = 'my'; //can also be 'others'
            if(myUsers.getCurrentUser()){
                var data = myTickets.getUserTickets(myUsers.getCurrentUser().id);

                vm.who = new NgTableParams({count:data.who.length},{data: data.who, counts: []});
                vm.requested = new NgTableParams({count:data.requested.length},{data: data.requested, counts: []});
            }
            
        }

        function setView(view) {
            vm.view = view;
        }

        function viewDetail(ticketId,backButton) {
            console.log('clicked',ticketId,backButton);
            
            vm.ticketDetail = myTickets.find(ticketId);
            vm.view = 'detail';
            vm.back = backButton;
        }
    }
})();