

var mongoose = require('mongoose');

var keys = require('../../keys').mongo;

/*
	1. go to mlab.com and sign up
	2. you will need to make a first user, please make note of the username and password
	3. hit "create new" database button
	4. select aws, single node, free
	5. click on the line item for the new DB and enter the page for it, then create a new user for it
	6. make a copy of the line "To connect using a driver via the standard MongoDB URI" and paste in here
    move the username and password values to keys.js

	Things you will need 
    username 'aaa'  
    password 'bbb'  
	mongodb://aaa:bbb@ds012300.mlab.com:12300/myfilms

	keys.js should be in the top level and look like this
	module.exports = {
		// put all security passwords usernames and keys here and DO NOT commit this file
		// keys.js is listed in the .gitignore
		mongo : {
			username : 'fred',
			password : 'fred'
		}
	}
*/


/* mongolab */
mongoose.connect('mongodb://' + keys.username + ':' + keys.password + '@ds043200.mlab.com:43200/myfilms')


module.exports = mongoose.connection;