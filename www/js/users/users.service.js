        // User:
        // {
        //     id: '',
        //     name: '',
        //     password: '',
        //     role: '',
        //     office: ''
        // }
(function() {
    'use strict';

    angular.module("ticketing-users")
    .factory('myUsers',['CacheFactory',myUsers]);

    function myUsers(CacheFactory) {
        var self = this;

        self.logged = null;
        self.currentUser = null;
        self.cache = null;

        activate();

        return {
            isLogged: isLogged,
            validateUser: validateUser,
            getCurrentUser: getCurrentUser,
            isAdmin: isAdmin,
            isHelpdesk: isHelpdesk,
            logout: logout
        };

        function activate() {
                self.logged = false;
        }

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
                return false;
            }
            return true;
        }

        function logout() {
            self.logged = false;
            self.currentUser = null;
        }

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
                user.office = 'bcn';

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