


var _ = require('underscore');

var post_film = require('./proj_modules/mongo/post_film');
var delete_collection = require('./proj_modules/mongo/delete_collection');
var find_film = require('./proj_modules/mongo/find_film');

module.exports = function(dbconnect){


    var express = require('express');
    var bodyParser = require('body-parser');
    var app = express();

    app.use( bodyParser.json() );
    app.use( bodyParser.urlencoded({extended: true}) );


    // this sets up the public directory so <img> tags can make get requests
    // for images and for linking to css, etc
    app.use(express.static(__dirname + '/public'));



    // demonstrates retreival with a get request
    app.get('/films', function(req, res){       
        console.log('get films filter : '+JSON.stringify(req.query) );  
        find_film (req.query, function(data){
            console.log('sending response');
            res.json( data );
        });  
    }); 

    // add a new film with a post request
    app.post('/films', function(req, res){
        console.log('attempting to add ' + req.body.name);        
        post_film(req.body, function(data){
            console.log('sending response');            
            res.json( data );
        }); 
    });

    // empty the collection
    app.delete('/films', function(req, res){
        console.log('attempting to delete ' + req.query.collectionName);
        delete_collection(dbconnect, req.query.collectionName, function(data){
            console.log('sending response');
            res.json( data );
        });
    });




    // alter response header so it doesn't say powered by expressJS
    app.use(function(req, res, next){
        res.set('X-Powered-By', '');
        next();
    });

    return app;

}
