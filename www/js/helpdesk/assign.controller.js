(function() {
    'use strict';

    angular.module("helpdesk")
    .controller('AssignController',['myTickets','$state','UserMocks','myUsers',AssignController]);

    function AssignController(myTickets,$state,UserMocks,myUsers) {
        var vm = this;

        vm.ticket = null;
        vm.helpdesks = null;
        vm.currentUser = null;
        activate();

        function activate() {
            vm.currentUser = myUsers.getCurrentUser();
            vm.ticket = myTickets.find($state.params.id);
            vm.helpdesks = UserMocks.getHelpdesks();
        }

        function goBack() {
            $state.go('tab.ticket-detail', {id: vm.ticket.id});
        }

        function transformName(name) {
            return UserMocks.getUserId(name);
        }
    }
})();