var filmlistModel = require('./models/filmlist');


module.exports = function(callback){
	if (!callback) { 
		console.log('callback missing'); 
		return null; 
	}
	filmlistModel.find().lean().exec(
		{},  // get all
		function(err, data){
			callback( err ? err : data );
		}
	);

}


