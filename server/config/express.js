var logger = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(logger('dev'));
	app.use(bodyParser());
};