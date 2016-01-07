var Ticket = require('../models/Ticket');

exports.getTickets = function(req, res) {
    res.send(req.params);
};
exports.getTicket = function(req, res) {
    var ticket = Ticket.getTicket(req.params.id);
    console.log(ticket);
    res.send('aha');
};
exports.saveTicket = function(req, res) {
	var ticket = new Ticket(req.params.ticket);
	ticket.save(function () {
		res.send('success');
	});
};
exports.remove = function(req, res) {
    res.send('hello');
};