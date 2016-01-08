/**
 * The tickets service creates new tickets instances and keeps track of all of them
 */
describe('tickets service',function () {

    var myTickets;
    var myUsers;
    
    beforeEach(module('my-tickets'));

    beforeEach(inject(function(_myTickets_,_myUsers_) {
        myTickets = _myTickets_;
        myUsers = _myUsers_;
    }));

    it('should make an instance of myModels.Ticket', function() {
        var ticket = myTickets.make(myTickets,'ppages');

        expect(ticket instanceof myModels.Ticket).toBe(true);
    });
        
    it('should save a ticket to the struct of tickets', function() {
        var ticket = myTickets.make(myTickets,'ppages');
        myTickets.save(ticket);
        expect(myTickets.size()).toBe(1);
    });
    
    it('should find a ticket by id in the struct of tickets', function() {
        var ticket = myTickets.make(myTickets,'ppages');
        myTickets.save(ticket);
        expect(myTickets.find(ticket._id)).toBe(ticket);
    });

    it('should get the tickets from the tickets struct for a given userid', function() {
        var ticket = myTickets.make(myTickets,'ppages');
        myTickets.save(ticket);
        var ticket2 = myTickets.make(myTickets,'ppages');
        myTickets.save(ticket2);

        var data = myTickets.getUserTickets('ppages');
        expect(data.who.length + data.requested.length + data.evaluate.length).toBe(2);
    });

    it('should give the size of the ticket struct', function() {
        var ticket = myTickets.make(myTickets,'ppages');
        myTickets.save(ticket);
        var ticket2 = myTickets.make(myTickets,'ppages');
        myTickets.save(ticket2);

        expect(myTickets.size()).toBe(2);
    });

    it('should give an array with all the tickets not yet assigned', function() {
        var ticket = myTickets.make(myTickets,'ppages');
        myTickets.save(ticket);
        var ticket2 = myTickets.make(myTickets,'ppages');
        myTickets.save(ticket2);
        var ticket3 = myTickets.make(myTickets,'scool');
        myTickets.save(ticket3);

        expect(myTickets.getNotAssigned().length).toBe(3);
    });

    it('should give an array with all the tickets closed', function() {
        var ticket = myTickets.make(myTickets,'ppages');
        myTickets.save(ticket);
        var ticket2 = myTickets.make(myTickets,'ppages');
        myTickets.save(ticket2);
        var ticket3 = myTickets.make(myTickets,'scool');
        myTickets.save(ticket3);

        ticket.close();
        ticket2.close();

        expect(myTickets.getClosed().length).toBe(2);
    });
            
    it('should give an array witn all the tickets assigned the current IT user logged', function() {
        
        var user = myUsers.validateUser('ppages','ppages');

        var ticket1 = myTickets.make(myTickets,'ppages');
        ticket1.it = 'ppages';
        var ticket2 = myTickets.make(myTickets,'ppages');
        var ticket3 = myTickets.make(myTickets,'user1');
        ticket3.it = 'ppages';
        var ticket4 = myTickets.make(myTickets,'user2');
        var ticket5 = myTickets.make(myTickets,'user3');

        myTickets.save(ticket1);
        myTickets.save(ticket2);
        myTickets.save(ticket3);
        myTickets.save(ticket4);
        myTickets.save(ticket5);

        expect(myTickets.getMine().length).toBe(2);

    });            

});