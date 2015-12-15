(function() {
    angular.module("my-tickets")
    .factory('myTickets',['CategoriesMocks','myUsers',myTickets]);

    function myTickets(CategoriesMocks,myUsers) {

        var self = this;
        var lastId = 0;
        var tickets = {};

        activate();

        return {
            make: make,
            save: save,
            find: find,
            getUserTickets: getUserTickets,
            mockTickets : mockTickets,
            size: size,
            getNotAssigned: getNotAssigned,
            getClosed: getClosed,
            getMine: getMine
        };


        function activate() {

        }

        function getMine() {
            var mine = [];
            var me = myUsers.getCurrentUser().id;

            var ticket;
            for(var id in tickets){
                ticket = tickets[id];
                if(ticket.it === me && ticket.status === 'open'){
                    mine.push(ticket);
                }
            }

            return mine;
        }

        function getClosed() {
            var closed = [];

            var ticket;
            for(var id in tickets){
                ticket = tickets[id];
                if(ticket.status === 'closed'){
                    closed.push(ticket);
                }
            }

            return closed;

        }

        function getNotAssigned() {
            var notAssigned = [];
            for(var id in tickets){
                if(tickets[id].it === null){
                    notAssigned.push(tickets[id]);
                }
            }
            return notAssigned;
        }

        function size() {
            return Object.keys(tickets).length;
        }

        function mockTickets(howMany,factory,userid) {
            var ticket;
            var options = {};
            for(var i = 0; i < howMany; i++) {
                ticket = factory.make(factory,userid, options);
                ticket.save(true);
            }
        }

        function getUserTickets(userid) {

            var res = {};
            res.who = [];
            res.evaluate = [];
            res.requested = [];
            var ticket;
            for(var id in tickets){
                ticket = tickets[id];
                if(ticket.who === userid){
                    res.who.push(ticket);
                }
                if(ticket.requested === userid && ticket.who !== userid){
                    res.requested.push(ticket);
                }
                if(ticket.evaluation === null && ticket.status === 'closed' && ticket.who === userid) {
                    res.evaluate.push(ticket);
                }
            }
            return res;
        }

        function find(id) {
            return tickets[id];
        }

        function save(ticket,mock) {
            mock = mock || false;
            if(ticket.id === -1){
                if(mock){
                    ticket.status = (Math.random() >= 0.5) ? 'open' : 'closed';
                    ticket.notified = new Date(2015,Math.floor(Math.random() * 11), Math.floor(Math.random() * 30));
                    if (Math.random() < 0.8) {
                        ticket.who = myUsers.getCurrentUser().id;
                    } else {
                        ticket.who = 'ppages';
                    }
                    ticket.issue = CategoriesMocks.randomCategory();
                    ticket.issueDescription = CategoriesMocks.getDescription(ticket.issue);
                    if(ticket.status === 'closed'){
                        ticket.evaluation = Math.floor(Math.random() * 6);
                        if(ticket.evaluation === 0){
                            ticket.evaluation = null;
                        }
                    }
                    if(ticket.status === 'open'){
                        ticket.it = null;                        
                    } else {
                        ticket.it = 'helpdesk';
                    }
                    ticket.office = 'bcn';
                    ticket.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, pariatur?';
                }else{
                    ticket.notified = new Date();    
                }
                lastId++;
                ticket.id = lastId;
                tickets[lastId] = ticket;
            }
        }

        function make(aFactory,userid) {

            var Ticket = function (aFactory,userid,options){

                var self = this;
                var factory = aFactory;

                self.id;
                self.express;
                self.status;
                self.notified;
                self.who;
                self.issue;
                self.issueDescription; //description copied from the issue object
                self.description;
                self.photo;
                self.image;
                self.comments;
                self.requested;
                self.it;
                self.office; //office comes given by the who 'user'
                self.isCompleted = isCompleted;
                self.save = save;

                activate();

                function activate() {
                    self.image = null;
                    self.requested = userid;
                    self.id = -1;
                    self.comments = null;
                    self.it = null;
                    self.notified = null;
                    self.status = 'open';    
                    self.express = false;
                    self.who = null;
                    self.issue = -1;
                    self.description = null;
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

                function save(mock) {
                    mock = mock || false;
                    factory.save(self,mock);
                }

            };

            return new Ticket(aFactory,userid,options);
        }
    }

})();