/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 Author: Hafeez Syed
 File: main.js
 Created on 26/3/17 7:20 PM
 Project: M101JS-MongoDB-for-NodeJS-Developers
 Description: < DESCRIPTION HERE >

 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

'use strict';

const express = require('express');
const engines = require('consolidate');
const bodyParser = require('body-parser');
const db = require('../db/db-connect')();
const app = express();
const router = express.Router();

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(router);

function errorHandler(err, req, res, next) {
	console.error(err.message);
	console.error(err.stock);
	res.status(500);
	res.render('error_template', {error: err});
}

app.use(errorHandler);

app.get('/', function (req, res) {
	db.connectDB()
		.then(success, failure);

	function success(db) {
		db.collection('movies').find().toArray()
			.then((docs) => {
				res.render('movies', {'movies': docs});
			});
	}

	function failure() {
	}
});


app.get('/fruit-picking', function (req, res, next) {
	res.render('fruit-picker', {fruits: ['apple', 'orange', 'banana', 'peach']});
});


app.get('/:name', function (req, res, next) {
	var name = req.params.name;
	var getvar1 = req.query.getvar1 || '';
	var getvar2 = req.query.getvar2 || '';

	res.render('hello', {name: name, getvar1: getvar1, getvar2: getvar2});
});

app.post('/favorite_fruit', function (req, res, next) {
	console.log(req.body);
	var favFruit = req.body.fruit;
	if(favFruit) {
		res.send('Your favorite fruit is ' + favFruit);
	} else{
		next(Error('Please choose a fruit!'))
	}
});

app.use(function (req, res) {
	res.sendStatus(404);
});

module.exports = app;