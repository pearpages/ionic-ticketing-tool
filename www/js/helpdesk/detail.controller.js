(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('DetailController',['$state','myTickets',DetailController]);

    function DetailController($state,myTickets) {
        var vm = this;

        vm.ticket = null;
        vm.backTo = null;
        vm.goBack = goBack;

        activate();

        function activate() {
            vm.backTo = $state.params.back;
            vm.ticket = myTickets.find($state.params.id);
            if($state.params.assign){
                vm.assign = true;
            }else{
                vm.assign = false;
            }
        }

        function goBack() {
            $state.go(vm.backTo);
        }
    }
})();