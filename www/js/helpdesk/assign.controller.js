/**
 * Assign an IT member to a ticket.
 */
(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('AssignController',['myTickets','$state','UserMocks','myUsers',AssignController]);

    function AssignController(myTickets,$state,UserMocks,myUsers) {
        var vm = this;

        vm.ticket = null;
        vm.helpdesks = null;
        vm.currentUser = null;
        vm.goBack = goBack;
        vm.transformName = transformName;
        activate();

        function activate() {
            vm.currentUser = myUsers.getCurrentUser();
            vm.ticket = myTickets.find($state.params.id);
            if(vm.ticket === undefined){
                vm.ticket = {};
                vm.ticket.it = null;
            }
            vm.helpdesks = UserMocks.getHelpdesks();
        }

        function goBack() {
            $state.go('tab.ticket-detail', {id: vm.ticket._id});
        }

        function transformName(name) {
            return UserMocks.getUserId(name);
        }
    }
})();