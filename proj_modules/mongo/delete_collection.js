
module.exports = function(dbconnect, collectionName, callback){

		// Drop the 'collectionName' collection from the current database		
		dbconnect.db.dropCollection(collectionName, function(err, result) {
			var answer = err ? err : result;
			callback( {data: answer} );
		});


}




