var mongoClient = require ('mongodb').MongoClient;
var assert = require ('assert');

var url = 'mongodb://localhost:27017/test';

mongoClient.connect (url, function (err, db) {

	assert.equal (null, err);

	console.log ('Connected to server');

	db.close ();
});