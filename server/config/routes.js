module.exports = function(app) {

    app.get('/ticket/id/:id', function(req,res) {
        res.send(req.params.id);
    });

    app.get('/tickets/status/:status/userid/:userid', function(req,res) {
    	res.send(req.params);
    });

    app.get('*', function(req, res) {
        res.status(404);
        res.send('Page does not exist');
    });
};
