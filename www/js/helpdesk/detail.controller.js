(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('DetailController',['$state','myTickets',DetailController]);

    function DetailController($state,myTickets) {
        var vm = this;

        vm.ticket = null;

        activate();

        function activate() {
            console.log($state);
            vm.ticket = myTickets.find($state.params.id);
            if($state.params.assign){
                vm.assign = true;
            }else{
                vm.assign = false;
            }
        }
    }
})();