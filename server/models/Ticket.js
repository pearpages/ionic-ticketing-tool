var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
        comment: String,
        date: {type: Date, default: Date.now}
});

var ticketSchema = new Schema({
    express: Boolean,
    status: String,
    notified: {type: Date, default: Date.now}
    who: String,
    issue: String,
    issueDescription: String, //description copied from the issue object
    description: String,
    closed: {type: Date}
    evaluation: Number,
    image: String,
    comments: [commentSchema]
    requested: String,
    it: String,
    office: String //office comes given by the who 'user'
});

/*self.isCompleted = isCompleted;
    self.addComment = addComment;
    self.save = save;
    self.close = close*/
