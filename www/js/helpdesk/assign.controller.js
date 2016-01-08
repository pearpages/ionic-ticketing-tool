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
            myTickets.find($state.params.id)
            .then(function success(response) {
                vm.ticket = response.data;
            },function error(response){
                console.log(response);
            });
            if(vm.ticket === undefined){
                vm.ticket = {};
                vm.ticket.it = null;
            }
            vm.helpdesks = UserMocks.getHelpdesks();
        }

        function goBack() {
            myTickets.save(vm.ticket, function() {
                $state.go('tab.ticket-detail', {id: vm.ticket._id});    
            });
        }

        function transformName(name) {
            return UserMocks.getUserId(name);
        }
    }
})();