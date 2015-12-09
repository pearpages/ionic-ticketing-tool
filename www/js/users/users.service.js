(function() {
    'use strict';

    angular.module("ticketing-users")
    .factory('myUsers',['$state',myUsers]);

    function myUsers($state) {
        var self = this;

        self.logged = false;
        self.currentUser = null;

        return {
            isLogged: isLogged,
            validateUser: validateUser,
            getCurrentUser: getCurrentUser,
            isAdmin: isAdmin,
            isHelpdesk: isHelpdesk,
            logout: logout
        };

        function isAdmin() {
            if(self.currentUser){
                return (self.currentUser === 'admin') ? true: false;
            } else {
                return false;
            }
        }

        function isHelpdesk() {
            if(self.currentUser){
                return (self.currentUser === 'helpdesk') ? true: false;
            } else {
                return false;
            }
        }

        function isLogged() {
            if(!self.logged){
                $state.go('tab.account');
                return false;
            }
            return true;
        }

        function logout() {
            self.logged = false;
            self.currentUser = null;
        }

        // User:
        // {
        //     id: '',
        //     name: '',
        //     password: '',
        //     role: ''
        // }
        function validateUser(user) {

            if(user.name !== user.password){
                return false;
            } else {
                if (user.name === 'helpdesk'){
                    user.role = 'helpdesk';
                } else if (user.name === 'admin') {
                    user.role = 'admin';
                } else {
                    user.role = 'user';
                }

                user.id = user.name;

                self.currentUser = user;
                self.logged = true;

                return true;
            }
        }

        function getCurrentUser() {
            return self.currentUser;
        }
    }
})();