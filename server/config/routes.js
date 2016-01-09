var tickets = require('../controllers/tickets');

module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/ticket/id/:id', tickets.getTicket);

    app.post('/ticket', tickets.saveTicket);

    app.get('/tickets/status/:status/userid/:userid', tickets.getTickets);

    app.get('/tickets/mock/user/:userid', tickets.mock);

    app.get('/tickets/remove-all', tickets.removeAll);

    app.get('/tickets', tickets.getAll);

    app.get('/tickets/user/:userid', tickets.getAllUserTickets);

    app.get('/tickets/remove', tickets.remove);

    app.get('/helpdesk/not-assigned', tickets.notAssigned);

    app.get('/helpdesk/assigned/:it', tickets.assigned);

    app.get('/helpdesk/closed', tickets.closed);

    app.post('/ticket', tickets.saveTicket);

    app.get('*', function(req, res) {
        res.status(404);
        res.send('Page does not exist');
    });
};
