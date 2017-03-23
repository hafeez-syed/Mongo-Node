/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 Author: Hafeez Syed
 File: app.js.js
 Created on 23/3/17 11:40 PM
 Project: M101JS-MongoDB-for-NodeJS-Developers
 Description: < DESCRIPTION HERE >

 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

const express = require('express');
const consolidate = require('consolidate');
const MongoDBClient = require('mongodb').MongoClient;
const app = express();

MongoDBClient.connect('mongodb://localhost:27017/video')
	.then(dbSuccess, dbFailure);

function dbSuccess(db) {
	console.log('database connected successfully');
	db.collection('movies').find().toArray()
		.then(function (docs) {
			docs.forEach(function (doc) {
				console.log(doc.title);
			});

			db.close();
		}, function () {
			console.log('error');
		})
		.catch(function () {
			console.log('error finding the document movies');
		});
}

function dbFailure() {
	console.log('Couldd not connect to database');
}



app.listen(7080, function () {
	console.log('server listening on port 7080');
});

