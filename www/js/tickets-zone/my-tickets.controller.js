(function() {
    'use strict';

    angular.module("tickets-zone")
    .controller('MyTicketsController',['myUsers','myTickets',MyTicketsController]);

    function MyTicketsController(myUsers,myTickets) {
        var vm = this;

        vm.who = null;
        vm.requested = null;
        vm.view = null;
        vm.setView = setView;
        
        activate();

        function activate() {
            myUsers.isLogged();

            vm.view = 'my'; //can also be 'others'
            if(myUsers.getCurrentUser()){
                var data = myTickets.getUserTickets(myUsers.getCurrentUser().id);

                vm.who = data.who;
                vm.requested = data.requested;    
            }
            
        }

        function setView(view) {
            vm.view = view;
        }

    }
})();