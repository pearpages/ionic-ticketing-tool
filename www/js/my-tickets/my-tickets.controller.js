/**
 * Shows the tickets that are related to the current logged user
 */
(function() {
    'use strict';

    angular.module("tickets-zone")
    .controller('MyTicketsController',['myUsers','myTickets','NgTableParams','$state','myLoading',MyTicketsController]);

    function MyTicketsController(myUsers,myTickets,NgTableParams,$state,myLoading) {
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

            setView($state.params.view); 
            if(myUsers.getCurrentUser()){
                setView('my');
            }
            
        }

        function setView(view) {
            myLoading.loading(function() {
                var data = myTickets.getUserTickets(myUsers.getCurrentUser().id);

                vm.who = new NgTableParams({count:data.who.length, sorting: {status:'desc',notified:'desc'}},{data: data.who, counts: []});
                vm.requested = new NgTableParams({count:data.requested.length, sorting: {status:'desc',notified:'desc'}},{data: data.requested, counts: []});
                vm.evaluate = new NgTableParams({count:data.evaluate.length, sorting: {notified:'asc'}},{data: data.evaluate, counts: []});
                vm.view = view;
            });
        }

        function viewDetail(ticketId,backButton) {
            
            vm.ticketDetail = myTickets.find(ticketId);
            vm.view = 'detail';
            vm.back = backButton;
        }
    }
})();