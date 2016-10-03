var filmlistModel = require('./models/filmlist');


module.exports = function(record, callback){
	console.log('post_filmlist : mongo attempting to save');
	if (!callback) { 
		console.log('callback missing'); 
		return null; 
	}
	var newItem = new filmlistModel( record );
	newItem.save(
		function(err){				
			if (err) {
				console.log('post_film save complete err', err);
				callback({ post : 'fail', error : err});
			} else {
				console.log('post_film save complete no error');
				callback({ post : 'success' });
			}
		}
	);

}