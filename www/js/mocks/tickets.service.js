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
            var random = Math.random();

            ticket.status = (Math.random() >= 0.5) ? 'open' : 'closed';
            ticket.notified = new Date(2015,Math.floor(Math.random() * 11), Math.floor(Math.random() * 30));
            //who
            if (random >= 0.5) {
                ticket.who = myUsers.getCurrentUser().id;
            } else if(random >= 0.25 ) {
                ticket.who = 'rholloway';
            } else {
                ticket.who = 'crodriguez';
            }
            ticket.issue = CategoriesMocks.randomCategory();
            ticket.issueDescription = CategoriesMocks.getDescription(ticket.issue);
            if(ticket.status === 'closed'){
                ticket.evaluation = Math.floor(random * 6);
                if(ticket.evaluation === 0){
                    ticket.evaluation = null;
                }
                ticket.closed = ticket.notified;
                if(random >= 0.75){
                    ticket.it = 'rholloway';
                }else if(random >= 0.5){
                    ticket.it = 'crodriguez';
                }else{
                    ticket.it = myUsers.getCurrentUser().id;
                }
            }
            if(random >= 0.5){
                ticket.image = 'img/ionic.png';
            }
            if(ticket.status === 'open'){
                if(random >= 0.75){
                    ticket.it = null;
                }else if(random >= 0.5){
                    ticket.it = 'rholloway';
                }else {
                    ticket.it = myUsers.getCurrentUser().id;
                }
            } 
            ticket.office = 'bcn';
            ticket.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, pariatur?';
		}
	}

})();