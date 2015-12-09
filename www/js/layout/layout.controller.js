(function() {
    'use strict';

    angular.module("ticketing-layout")
    .controller('LayoutController',['myUsers',LayoutController]);

    function LayoutController(myUsers) {

        var vm = this;

        vm.userRole;
        vm.setUserRole = setUserRole;

        activate();

        function activate() {
            if(myUsers.getCurrentUser()) {
                vm.userRole = myUsers.getCurrentUser().role;        
            } else {
                vm.userRole = 'user';
            }
        }

        function setUserRole(role) {
            vm.userRole = role;
        } 

    }
})();