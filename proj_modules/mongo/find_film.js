var filmlistModel = require('./models/filmlist');

module.exports = function(param, callback){
	if (!callback) { 
		console.log('callback missing'); 
		return null; 
	}
	filmlistModel.find(param)
	.lean()
	.exec(
		function(err, data){
			callback( err ? err : data );
		}
	);

}



