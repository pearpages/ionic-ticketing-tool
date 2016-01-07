var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    comment: String,
    date: {
        type: Date,
        default: Date.now
    }
});

var ticketSchema = new Schema({
    express: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: 'open'
    },
    notified: {
        type: Date,
        default: Date.now
    },
    who: {
        type: String,
        required: true
    },
    issue: {
        type: Number,
        required: true
    },
    issueDescription: {
        //description copied from the issue object
        type: String,
        required: true
    },
    description: {
        type: String
    },
    closed: {
        type: Date
    },
    evaluation: Number,
    image: String,
    comments: [commentSchema],
    requested: {
        type: String,
        required: true
    },
    it: String,
    office: String //office comes given by the who 'user'
});

ticketSchema.methods.isCompleted = function() {
    var res;
    if (this.who !== null && this.issue > -1) {
        res = true;
    } else {
        res = false;
    }
    return res;
};

ticketSchema.methods.close = function() {
    this.status = 'closed';
    this.closed = new Date();
};

ticketSchema.methods.addComment = function(text) {
    var std = {};
    std.comment = text;
    std.date = new Date();
    this.comments.push(std);
};

var Ticket = mongoose.model('Ticket',ticketSchema);

exports.Ticket = Ticket;