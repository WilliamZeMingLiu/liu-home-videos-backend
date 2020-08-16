var express = require('express');
var router = express.Router();
var db = require('../db/database.js');

router.get('/', function(req, res, next) {
	var sqlTable = "youtube_links";
	var sqlScript = "SELECT * FROM " + sqlTable;
	db.all(sqlScript, (err, rows) => {
		if(err){
			res.status(400).json({"error": err.message});
			return;
		} else {
			res.json(rows);
		}
	})
});

router.get('/:category', function(req, res, next) {
	var sqlTable = "youtube_links";
	var sqlScript = "SELECT * FROM " + sqlTable + " WHERE category=" + req.params.category;
	db.all(sqlScript, (err, rows) => {
		if(err){
			res.status(400).json({"error": err.message});
			return;
		} else {
			res.json(rows);
		}
	})
});

router.use((req,res) => {
	res.status(404).send();
});

module.exports = router;