/**
 * Almost al the ticket logic is here:
 * + create a new ticket
 * + filter tickets
 * + find ticket by id
 *
 * ...
 */
(function() {
    angular.module("my-tickets")
        .factory('myTickets', ['CategoriesMocks', 'myUsers','$http', '$q',myTickets]);

    function myTickets(CategoriesMocks, myUsers, $http, $q) {

        var self = this;
        var lastId = 0;
        var tickets = {};
        var server = false;

        activate();

        return {
            make: make,
            save: save,
            find: find,
            getUserTickets: getUserTickets,
            size: size,
            getNotAssigned: getNotAssigned,
            getClosed: getClosed,
            getMine: getMine,
            serverOn: serverOn
        };


        function activate() {

        }

        function serverOn() {
            server = true;
        }

        function getMine() {
            var mine = [];
            var me = myUsers.getCurrentUser().id;

            var ticket;
            for (var id in tickets) {
                ticket = tickets[id];
                if (ticket.it === me && ticket.status === 'open') {
                    mine.push(ticket);
                }
            }

            return mine;
        }

        function getClosed() {
            var closed = [];

            var ticket;
            for (var id in tickets) {
                ticket = tickets[id];
                if (ticket.status === 'closed') {
                    closed.push(ticket);
                }
            }

            return closed;

        }

        function getNotAssigned() {
            var notAssigned = [];
            for (var id in tickets) {
                if (tickets[id].it === null) {
                    notAssigned.push(tickets[id]);
                }
            }
            return notAssigned;
        }

        function size() {
            return Object.keys(tickets).length;
        }

        function getUserTickets(userid) {

            if (server === false) {
                var deferred = $q.defer();
                var res = {};
                res.who = [];
                res.evaluate = [];
                res.requested = [];
                var ticket;
                for (var id in tickets) {
                    ticket = tickets[id];
                    if (ticket.who === userid) {
                        res.who.push(ticket);
                    }
                    if (ticket.requested === userid && ticket.who !== userid) {
                        res.requested.push(ticket);
                    }
                    if (ticket.evaluation === null && ticket.status === 'closed' && ticket.who === userid) {
                        res.evaluate.push(ticket);
                    }
                }

                deferred.resolve({data: res});

                return deferred.promise;
            } else {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3030/tickets/user/'+userid
                });
            }

        }

        function find(id) {
            return tickets[id];
        }

        function save(ticket) {
            if (ticket.id === -1) {
                ticket.notified = new Date();
                lastId++;
                ticket.id = lastId;
                tickets[lastId] = ticket;
            }
        }

        function make(aFactory, userid) {

            return new myModels.Ticket(aFactory, userid);
        }
    }

})();
