var express = require('express');
var app = express();

var config = require('./server/config/config');

require('./server/utilities/mock/tickets').mock(100,'ppages');
require('./server/config/express')(app);
require('./server/config/mongo')(config);
require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port '+ config.port + '...');