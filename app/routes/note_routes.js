module.exports = function (app, db) {
	const __root = "C:\\xampp\\htdocs\\last_night"

	app.get('/', (req, res) => {
		res.sendFile(__root + req.route.path, {}, function (err) {
			if (err) throw err;
		});
	})

	app.get(/\/books\/display.html*/, (req, res) => {
		if (!req.query.index) {
			res.sendFile(__root + req._parsedUrl.pathname, {}, (err) => {
				if (err) throw err;
			});
		}
	})

	app.get(/\/dependencies*/, (req, res) => {
		res.sendFile(__root + decodeURI(req._parsedUrl.path), {}, function (err) {
			if (err) throw err;
		});
	})













	// app.post('/notes', (req, res) => {
	// 	const note = {text : req.body.body, title : req.body.title}

	// 	db.collection('notes').insert(note, (err, result) => {
	// 		if (err) {
	// 			res.send({ 'error': 'An Error has occured' });
	// 		} else {
	// 			res.send(result.ops[0]);
	// 		}
	// 	})
	// });
};