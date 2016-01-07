exports.getTickets = function(req, res) {
    res.send(req.params);
};
exports.getTicket = function(req, res) {
    res.send(req.params.id);
}