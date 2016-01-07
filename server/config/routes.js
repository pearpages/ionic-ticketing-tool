module.exports = function(app) {

    app.get('/ticket/:id', function(req,res) {
        res.send(req.id);
    });

    app.get('*', function(req, res) {
        res.status(404);
        res.send('Page does not exist');
    });
};
