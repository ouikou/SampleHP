var env = process.env.NODE_ENV || 'development',
	config = require('./config/global')[env];

GLOBAL.config = config;

// Create Exrepss Server
var app = require('./config/express')(config);

app.listen(3080);

module.exports = app;
