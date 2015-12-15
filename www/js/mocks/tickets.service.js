(function() {
	'use strict';

	angular.module("tickets-mocks")
	.factory('myTicketsMocks',['myUsers','CategoriesMocks',myTicketsMocks]);

	function myTicketsMocks(myUsers,CategoriesMocks) {

		var self = this;

		activate();

		return {
			mockTickets: mockTickets
		};

		function activate() {

		}

		function mockTickets(howMany,factory,userid) {
			var ticket;
            for(var i = 0; i < howMany; i++) {
                ticket = factory.make(factory,userid);
                mock(ticket);
                ticket.save(true);
            }
		}

		function mock(ticket) {
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
                ticket.closed = ticket.notified;
            }
            if(ticket.status === 'open'){
                ticket.it = null;                        
            } else {
                ticket.it = 'helpdesk';
            }
            ticket.office = 'bcn';
            ticket.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, pariatur?';
		}
	}

})();