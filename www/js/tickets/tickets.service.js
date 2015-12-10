(function() {
    angular.module("my-tickets")
    .factory('myTickets',[myTickets]);

    function myTickets() {

        var self = this;
        var lastId = 0;
        var tickets = {};

        activate();

        return {
            make: make,
            save: save,
            find: find,
            getUserTickets: getUserTickets
        };


        function activate() {

        }

        function getUserTickets(userid) {
            
            var res = {};
            res.who = [];
            res.requested = [];
            var ticket;
            for(var id in tickets){
                ticket = tickets[id];
                if(tickets.who === userid){
                    res.who.push(ticket);
                }
                if(ticket.requested === userid){
                    res.requested.push(ticket);
                }
            }

            return res;
        }

        function find(id) {
            return tickets.id;
        }

        function save(ticket) {
            if(ticket.id === -1){
                lastId++;
                ticket.id = lastId;
                tickets[lastId] = ticket;
            }
        }

        function make(aFactory,userid) {

            var Ticket = function (aFactory,userid){

                var self = this;
                var factory = aFactory;

                self.id;
                self.express;
                self.status;
                self.notified;
                self.who;
                self.issue;
                self.issueDescription;
                self.description;
                self.photo;
                self.completed;
                self.requested;
                self.isCompleted = isCompleted;
                self.save = save;

                activate();

                function activate() {
                    self.requested = userid;
                    self.id = -1;
                    self.notified = new Date();
                    self.status = 'open';
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

            return new Ticket(aFactory,userid);
        }
    }

})();