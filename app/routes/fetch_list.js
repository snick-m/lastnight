module.exports = function (app) {
	const __root = "C:\\xampp\\htdocs\\last_night"
	const fs = require('fs');

	app.get('/books', (req, res) => {
		var fileContents = fs.readFileSync('./dependencies/books/bookIDtoName.json');
		var bookList = JSON.parse(fileContents);

		const type = req.query.type;
		const id = req.query.id;
		if (type == "books") {
			console.log("Return Book List");
			var returnList = [];

			for (var ID in bookList) {
				returnList.push({id : ID, name : bookList[ID]});
			}

			res.send(returnList);
		} else if (type == "pages") {
			if (id && !isNaN(id) && id.indexOf(".") == -1 && bookList[id]) {
				var bookName = bookList[id];
				var pages = fs.readdirSync('./dependencies/books/' + bookName + '/leftPages/');
				res.send({ success: "Pages Info Returned for Book : " + bookName, length: pages.length, name: bookName });
				console.log("Return Pages Info : ", bookName);
			} else if (id) {
				res.send({ error: "Wrong Book ID Provided" });
				console.log("ID Not Recognized");
			} else {
				res.send({ error: "Book ID Not Provided" });
				console.log("No Book ID Specified");
			}
		} else if (type) {
			res.send({ error: "Invalid Type Specified" });
		} else {
			res.sendFile('/books/index.html', { root: __root }, function (err) {
				if (err) throw err;
			});
		}
	})
}