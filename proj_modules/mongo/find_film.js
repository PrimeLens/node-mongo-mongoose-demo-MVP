var filmlistModel = require('./models/filmlist');

module.exports = function(param, callback){
	if (!callback) { 
		console.log('callback missing'); 
		return null; 
	}
	// generally if no query string was present param would be an empty object
	// passing an empty object would yield a quiry to retreive the entire collection
	if (!param) param = {};
	
	filmlistModel.find(param)
	.lean()
	.exec(
		// param can also go here
		function(err, data){
			callback( err ? err : data );
		}
	);

}



