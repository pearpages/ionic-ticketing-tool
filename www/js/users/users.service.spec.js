/**
 * Deals with the login, logout and privileges (in the front side).
 * A check in the backend has always to be done!!!
 */
describe('myUsers service', function() {

    var myUsers;

    beforeEach(module('ticketing-users'));

    beforeEach(inject(function(_myUsers_) {
        myUsers = _myUsers_;
    }));

    it('should check if there is an user logged', function() {
        expect(myUsers.isLogged()).toBe(false);
        myUsers.validateUser('ppages','ppages');
        expect(myUsers.isLogged()).toBe(true);
    });

    it('should validate the login and give back a user', function() {
        expect(myUsers.validateUser('xxx','123')).toBe(null);
        expect(myUsers.validateUser('usuari123','usuari123').id).toBe('usuari123');
    });

    it('should get the current logged user', function() {
        myUsers.validateUser('ppages','ppages');
        expect(myUsers.getCurrentUser().id).toBe('ppages');
    });

    it('should check if the current logged user has admin priveleges', function() {
        myUsers.validateUser('ppages','ppages');
        expect(myUsers.isAdmin()).toBe(false);
        myUsers.validateUser('admin','admin');
        expect(myUsers.isAdmin()).toBe(true);
        myUsers.validateUser('helpdesk','helpdesk');
        expect(myUsers.isAdmin()).toBe(false);
    });

    it('should check if the current logged user is of the type IT', function() {
        myUsers.validateUser('ppages','ppages');
        expect(myUsers.isIT()).toBe(false);
        myUsers.validateUser('helpdesk','helpdesk');
        expect(myUsers.isIT()).toBe(true);
        myUsers.validateUser('admin','admin');
        expect(myUsers.isIT()).toBe(true);
    });

    it('should check it the current logged user is of the type helpdesk', function() {
        myUsers.validateUser('ppages','ppages');
        expect(myUsers.isIT()).toBe(false);
        myUsers.validateUser('helpdesk','helpdesk');
        expect(myUsers.isIT()).toBe(true);
        myUsers.validateUser('admin','admin'); 
        expect(myUsers.isIT()).toBe(true); //an admin is also a helpdesk
    });

    it('should log out the current user', function() {
        myUsers.validateUser('ppages','ppages');
        expect(myUsers.getCurrentUser().id).toBe('ppages');
        myUsers.logout();
        expect(myUsers.getCurrentUser()).toBe(null);

    });

});