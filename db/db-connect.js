/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 Author: Hafeez Syed
 File: db-connect.js
 Created on 26/3/17 7:19 PM
 Project: M101JS-MongoDB-for-NodeJS-Developers
 Description: < DESCRIPTION HERE >

 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

'use strict';

const MongoDBClient = require('mongodb').MongoClient;

function connectDB() {
	return MongoDBClient.connect('mongodb://localhost:27017/video');
}

function db() {
	return {
		connectDB: connectDB
	}
}

module.exports = db;