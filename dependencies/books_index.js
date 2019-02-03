var bookListBtn, pageInfoBtn, bookIDField, responseField;

window.addEventListener('DOMContentLoaded', () => {

	bookListBtn = document.getElementById("fetchBookList");
	pageInfoBtn = document.getElementById("fetchPageList");
	bookIDField = document.getElementById("bookID");
	responseField = document.getElementById("response");

}, false);

function fetchBookList() {
	var req = new XMLHttpRequest();

	req.open('GET', '/books?type=books');
	req.send();

	req.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			responseField.innerText = "Response from Server : " + req.responseText;
			var booksArray = JSON.parse(req.response);
			var domList = document.getElementById('bookList');

			booksArray.forEach(elem => {
				var li = document.createElement("li");
				var a = document.createElement("a");

				li.appendChild(document.createTextNode(elem.name + " : " + elem.id));

				a.setAttribute('href', '/books/display.html?id=' + elem.id);
				a.appendChild(li);
				domList.appendChild(a);
			});
		}
	}
}

function fetchPageList() {
	var req = new XMLHttpRequest();

	req.open('GET', '/books?type=pages&id=' + bookIDField.value);
	req.send();

	req.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			responseField.innerText = "Response from Server : " + req.responseText;
		}
	}
}