var sqlite3 = require('sqlite3').verbose();
const path = require('path');
const DBSOURCE = path.resolve(__dirname, './liu_family_website_links.db');

//const DBSOURCE = "./db/liu_family_website_links.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
	if(err){
		console.error(err.message);
		throw err;
	} else {
		console.log("Connected to SQLite database: " + DBSOURCE);
	}
});


module.exports = db;