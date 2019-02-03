// const MongoClient = require('mongodb').MongoClient; ** DB Client Not needed for now **
// const db = require('./config/db'); ** DB Config Not needed for now **

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');

const app = express();

const port = 80;

// app.use(bodyParser.urlencoded({ extended: true }));

routes.fetchList(app);
routes.routeMgmt(app, {});

app.listen(port, () => {
	console.log("Listening on", port);
});












// MongoClient.connect(db.url, (err, database) => {  ** Done without connecting to DB until needed **
// 	if (err) return console.log(err)

// 	rroutes.noteMgmt(app, database);
// 	app.listen(port, () => {
// 		console.log("Listening on", port);
// 	});
// })