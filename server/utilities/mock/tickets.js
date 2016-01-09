var Ticket = require('../../models/Ticket');
var CategoriesMocks = require('./categories');

exports.mock = function(howMany, userid) {
    var ticket;
    for (var i = 0; i < howMany; i++) {
        ticket = new Ticket.Ticket(mock(userid));
        ticket.save(function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
};

function mock(userid) {
    var random = Math.random();

    var ticket = {};
    ticket.comments = [];

    ticket.requested = userid;

    ticket.status = (Math.random() >= 0.5) ? 'open' : 'closed';
    ticket.notified = new Date(2015, Math.floor(Math.random() * 11), Math.floor(Math.random() * 30));
    //who
    if (random >= 0.5) {
        ticket.who = userid;
    } else if (random >= 0.25) {
        ticket.who = 'rholloway';
    } else {
        ticket.who = 'crodriguez';
    }
    ticket.issue = CategoriesMocks.randomCategory();
    ticket.issueDescription = CategoriesMocks.getDescription(ticket.issue);
    if (ticket.status === 'closed') {
        ticket.evaluation = Math.floor(random * 6);
        if (ticket.evaluation === 0) {
            ticket.evaluation = null;
        }
        ticket.closed = ticket.notified;
        if (random >= 0.75) {
            ticket.it = 'rholloway';
        } else if (random >= 0.5) {
            ticket.it = 'crodriguez';
        } else {
            ticket.it = userid;
        }
    }
    if (random >= 0.5) {
        ticket.image = 'img/ionic.png';
    }
    if (ticket.status === 'open') {
        if (random >= 0.75) {
            ticket.it = null;
        } else if (random >= 0.5) {
            ticket.it = 'rholloway';
        } else {
            ticket.it = userid;
        }
    }
    if (ticket.it !== null) {
        ticket.comments.push({
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, optio.'
        });
        ticket.comments.push({
            comment: 'Lorem ipsum dolor sit amet.'
        });
    }
    ticket.office = 'bcn';
    ticket.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, pariatur?';

    return ticket;
}
