
var mongoose = require('mongoose');

module.exports = mongoose.model(
	// first parameter is the name of the collection
	// the collection does not need to exist when the first record is pushed 
	// it will create the collection and define the schema
	'myfilmlist',
	// note : if the name of the collection does not end in s it adds an s 
	// myfilmlists
	// not sure if this is a perculiaritu of mlab or mongo itself
	{
		year: Number,
		name: String,
		seenIt: Boolean,
		credits: {
			director : String,
			cinematographer : String,
			producer : String
		},
		cast : Array,
		dateTimeCreated : { type : Date, default: Date.now },
		dateTimeUpdated : { type : Date, default: Date.now },
		extraInfo : Object
	}
);

