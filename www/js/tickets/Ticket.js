var myModels = {};

myModels.Ticket = function (aFactory,userid){

                var self = this;
                var factory = aFactory;

                self._id;
                self.express;
                self.status;
                self.notified;
                self.who;
                self.issue;
                self.issueDescription; //description copied from the issue object
                self.description;
                self.photo;
                self.closed;
                self.evaluation;
                self.image;
                self.comments;
                self.requested;
                self.it;
                self.office; //office comes given by the who 'user'
                self.isCompleted = isCompleted;
                self.addComment = addComment;
                self.save = save;
                self.close = close;

                activate();

                function activate() {
                    self.image = null;
                    self.closed = null;
                    self.requested = userid;
                    self._id = undefined;
                    self.comments = [];
                    self.it = null;
                    self.evaluation = null;
                    self.notified = undefined;
                    self.status = 'open';    
                    self.express = false;
                    self.who = null;
                    self.issue = -1;
                    self.description = null;
                    self.photo = null;
                }

                function addComment(text) {
                    var std = {};
                    std.comment = text;
                    std.date = new Date();
                    self.comments.push(std);
                }

                function isCompleted() {
                    var res;
                    if(self.who !== null && self.issue > -1){
                        return res = true;
                    } else {
                        return res = false;
                    }
                    return res;
                }

                function save() {
                    factory.save(self);
                }

                function close(){
                    self.status = 'closed';
                    self.closed = new Date();
                }

            };