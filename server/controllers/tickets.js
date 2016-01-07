var Ticket = require('../models/Ticket');

exports.getTickets = function(req, res) {
    res.send(req.params);
};
exports.getTicket = function(req, res) {
    res.send(Ticket.getTicket(req.params.id));
}