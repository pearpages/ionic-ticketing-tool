(function() {
    'use strict';

    angular.module("tickets-zone")
    .controller('MyTicketsController',['myUsers','myTickets','NgTableParams',MyTicketsController]);

    function MyTicketsController(myUsers,myTickets,NgTableParams) {
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

                vm.who = new NgTableParams({count:data.who.length},{data: data.who, counts: []});
                vm.requested = new NgTableParams({count:data.requested.length},{data: data.requested, counts: []});

                console.log(vm.who);
                console.log(vm.requested);
            }
            
        }

        function setView(view) {
            vm.view = view;
        }

    }
})();