var tickets = require('../controllers/tickets');

module.exports = function(app) {

    app.get('/ticket/id/:id', tickets.getTicket);

    app.get('/tickets/status/:status/userid/:userid', tickets.getTickets);

    app.get('*', function(req, res) {
        res.status(404);
        res.send('Page does not exist');
    });
};
