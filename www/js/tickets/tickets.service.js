(function() {
    angular.module("my-tickets")
    .factory('myTickets',[myTickets]);

    function myTickets() {

        var self = this;
        var lastId = -1;
        var tickets = {};

        activate();

        var Ticket = function (aFactory,userid){

            var self = this;
            var factory = aFactory;

            self.id;
            self.express;
            self.who;
            self.issue;
            self.description;
            self.photo;
            self.completed;
            self.requested;
            self.isCompleted = isCompleted;
            self.save = save;

            activate();

            function activate() {
                self.requestd = userid;
                self.id = -1;
                self.express = false;
                self.who = null;
                self.issue = -1;
                self.description = '';
                self.photo = null;
            }

            function isCompleted() {
                var res;
                if(self.who !== null && self.issue > -1){
                    return res = true;
                } else {
                    return res = false;
                }
                return res;
            }

            function save() {
                factory.save(self);
            }

        };

        return {
            make: make,
            save: save,
            find: find
        };

        function activate() {

        }

        function find(id) {
            return tickets.id;
        }

        function save(ticket) {
            if(ticket.id === -1){
                lastId++;
                tickets[lastId] = ticket;
            }
        }

        function make(aFactory,userid) {
            return new Ticket(aFactory,userid);
        }
    }

})();