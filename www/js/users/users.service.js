(function() {
    'use strict';

    angular.module("ticketing-users")
    .factory('myUsers',['CacheFactory',myUsers]);

    function myUsers(CacheFactory) {
        var self = this;

        self.currentUser = null;
        self.cache = null;

        activate();

        return {
            isLogged: isLogged,
            validateUser: validateUser,
            getCurrentUser: getCurrentUser,
            isAdmin: isAdmin,
            isIT: isIT,
            isHelpdesk: isHelpdesk,
            logout: logout
        };

        function activate() {
            //...
        }

        function isAdmin() {
            if(self.currentUser){
                return (self.currentUser === 'admin') ? true: false;
            } else {
                return false;
            }
        }

        function isIT() {
            if(isAdmin() || isHelpdesk()){
                return true;
            }
            return false;
        }

        function isHelpdesk() {
            if(self.currentUser){
                return (self.currentUser === 'helpdesk') ? true: false;
            } else {
                return false;
            }
        }

        function isLogged() {
            if(self.currentUser === null){
                return false;
            }
            return true;
        }

        function logout() {
            self.currentUser = null;
        }

        function validateUser(userid, password) {

            if(userid !== password){
                return null;
            } else {
                self.currentUser = {};
                self.currentUser.id = userid;
                self.currentUser.name = userid;
                self.currentUser.office = 'bcn';

                if (userid === 'helpdesk'){
                    self.currentUser.role = 'helpdesk';
                } else if (userid === 'admin') {
                    self.currentUser.role = 'admin';
                } else {
                    self.currentUser.role = 'user';
                }

                return self.currentUser;
            }
        }

        function getCurrentUser() {
            return self.currentUser;
        }
    }
})();