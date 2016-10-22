
/*
	This script was written to demonstrate an iterative read of the collection.
	It might be useful when needing to process items in a large collection

*/


var http = require('http');

 // mongoose connections to mlab
var dbconnect = require('./proj_modules/mongo/dbconnect');


var filmlistModel = require('./proj_modules/mongo/models/filmlist');


var cursor = filmlistModel.find().lean().cursor();

// read through the first 8 documents in the collection
var i = 0;
cursor.on('data', function(doc) {
	/* 
		cursor research thanks to jurevans
		https://github.com/jurevans 
	*/
	if (i < 8) {
		console.log( i + ' : ' + doc.name + '        ' + JSON.stringify(doc) );
		// do something
		i++;
	} else {
		console.log('exiting');
		return false;
	}
});


// learned about on error from here https://github.com/Automattic/mongoose/issues/3109
cursor.on('error', function(val) {
	console.error(val);
	cursor.destroy();
});
