var Ticket = require('../models/Ticket');

exports.getTickets = function(req, res) {
    var status = req.params.status;
    var userid = req.params.userid;

    var query = {status: status, requested: userid};
    if(status === 'all'){
        query = {requested: userid};
    }
    Ticket.Ticket.find(query, function (err, result) {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
exports.getTicket = function(req, res) {
    var id = req.params.id;
    Ticket.Ticket.findById(id, function (err, result){
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
exports.remove = function(req, res) {
    Ticket.Ticket.remove({},function(err, result) {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
exports.getAll = function(req, res) {
    Ticket.Ticket.find({}, function (err, result) {
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
exports.saveTicket = function(req, res) {
    var ticket = new Ticket(req.params.ticket);
    ticket.save(function () {
        res.send(ticket);
    });
};