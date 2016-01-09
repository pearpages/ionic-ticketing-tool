var Ticket = require('../models/Ticket');

exports.getTickets = function(req, res) {
    var status = req.params.status;
    var userid = req.params.userid;

    var query = {
        status: status,
        requested: userid
    };
    if (status === 'all') {
        query = {
            requested: userid
        };
    }
    Ticket.Ticket.find(query, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
exports.getTicket = function(req, res) {
    var id = req.params.id;
    Ticket.Ticket.findById(id, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
exports.remove = function(req, res) {
    Ticket.Ticket.remove({}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
exports.getAll = function(req, res) {
    Ticket.Ticket.find({}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
exports.getAllUserTickets = function(req, res) {
    var userid = req.params.userid;

    var json = {};
    json.evaluate = [];
    Ticket.Ticket.find({
        who: userid
    }, function(err, result) {
        json.who = result;
        for (var i = 0; i < json.who.length; i++) {
            if (json.who[i].evaluation === null && json.who[i].status === 'closed') {
                json.evaluate.push(json.who[i]);
            }
        }
        Ticket.Ticket.find({
            requested: userid,who:{$ne:userid}
        }, function(err, result) {
            json.requested = result;
            res.send(json);
        });
    });

};
exports.mock = function(req,res) {
    var userid = req.params.userid;
    require('../utilities/mock/tickets').mock(100,userid);
    res.send('mocked');
};
exports.saveTicket = function(req, res) {
    var data = req.body;
    if (req.body._id === undefined) {
        var ticket = new Ticket.Ticket(data);
        ticket.save(function success() {
            res.send(ticket);
        });
    } else {
        Ticket.Ticket.update({_id:req.body._id},req.body, function (err, result) {
            if(err) {
                res.send(err);
            } else {
                res.send(result);    
            }
        });
    }
};
exports.removeAll = function(req, res){
    Ticket.Ticket.remove({}, function(err, result) {
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
exports.notAssigned = function(req, res) {
    Ticket.Ticket.find({it:null}, function(err, result) {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
exports.closed = function(req, res) {
    var it = req.params.it;
        Ticket.Ticket.find({closed:{$ne:null}}, function(err, result) {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
exports.assigned = function(req, res) {
    var it = req.params.it;
        Ticket.Ticket.find({it:it,status:{$ne:'closed'}}, function(err, result) {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};
    
