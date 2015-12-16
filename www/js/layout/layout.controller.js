/**
 * Changes the tabs of the main menu depending on the user logged profile.
 */
(function() {
    'use strict';

    angular.module("ticketing-layout")
    .controller('LayoutController',['myUsers',LayoutController]);

    function LayoutController(myUsers) {

        var vm = this;

        vm.userRole = null;
        vm.setUserRole = setUserRole;

        activate();

        function activate() {
            if(myUsers.getCurrentUser()) {
                vm.userRole = myUsers.getCurrentUser().role;        
            } else {
                vm.userRole = 'none';
            }
        }

        function setUserRole(role) {
            vm.userRole = role;
        } 

    }
})();