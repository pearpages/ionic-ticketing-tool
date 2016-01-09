/**
 * 
 * Logging a User and mocking tickets
 */
(function() {
    'use strict';

    angular.module("ticketing-account")
        .controller('AccountController', ['$state', 'myUsers', 'myTickets', 'myTicketsMocks', '$ionicLoading', '$timeout', '$http', AccountController]);

    function AccountController($state, myUsers, myTickets, myTicketsMocks, $ionicLoading, $timeout, $http) {

        var vm = this;

        vm.user = null;
        vm.form = {};
        vm.form.userid = null;
        vm.form.password = null;
        vm.form.message = null;
        vm.validateUser = validateUser;
        vm.hideErrorMessage = hideErrorMessage;
        vm.logout = logout;
        vm.mock = mock;
        vm.mockServer = mockServer;

        activate();

        function activate() {
            vm.user = myUsers.getCurrentUser();
            myTickets.setServer(true);
        }

        function hideErrorMessage() {
            vm.form.message = null;
        }

        function mock() {
            $ionicLoading.show({
                template: 'Mocking...'
            });

            myTickets.setServer(false);
            $timeout(function() {
                myTicketsMocks.mockTickets(50, myTickets, vm.user.id);
                $ionicLoading.hide();
            }, 1000);

        }

        function mockServer() {
            $ionicLoading.show({
                template: 'Mocking...'
            });

            $http({
                method: 'GET',
                url: 'http://localhost:3030/tickets/mock/user/' + vm.user.id
            }).then(function(success) {
                console.log(success);
                $ionicLoading.hide();
            }, function(err) {
                console.log(err);
            });
        }

        function showLoading() {
            $ionicLoading.show({
                template: 'Validating...'
            });
        }

        function hideLoading() {
            $timeout(function() {
                vm.user = myUsers.validateUser(vm.form.userid, vm.form.password);
                if (vm.user === null) {
                    vm.form.message = 'Wrong password';
                } else {
                    $state.reload();
                }
                $ionicLoading.hide();
            }, 1000);
        }

        function validateUser() {
            showLoading();
            hideLoading();
        }

        function logout() {
            myUsers.logout();
            vm.user = null;
            $state.reload();
        }

    }
})();
