

var http = require('http');

 // mongoose connections to mlab
var dbconnect = require('./proj_modules/mongo/dbconnect');



var app = require('./app')(dbconnect);






var port = process.env.PORT || 3000; 		// set our port
var host = process.env.HOST || '0.0.0.0'; // For Heroku to run successfully

http.createServer(app).listen(port, host, function () {
  console.log("Server ready at http://localhost:" + port);
});

