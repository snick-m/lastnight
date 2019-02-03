var leftPage, rightPage, rBtn, lBtn;
var index, id, pages, name;

var queryObj = JSON.parse('{"' + window.location.search.slice(1).replace(/&/g, '", "').replace(/=/g, '": "') + '"}')
queryObj.index = parseInt(queryObj.index);

index = 1;
id = queryObj.id;

var req1 = new XMLHttpRequest();
req1.open('GET', '/books?type=pages&id=' + queryObj.id);

req1.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var res = JSON.parse(this.responseText);
		pages = parseInt(res.length);
		name = res.name;

		rBtn.addEventListener('mousedown', () => {
			nextPage();
		});

		lBtn.addEventListener('mousedown', () => {
			prevPage();
		});

		updatePage(0);
	}
}

window.addEventListener('DOMContentLoaded', () => {
	leftPage = document.getElementById('pageL');
	// rightPage = document.getElementById('pageR');
	rBtn = document.getElementById('nextButton');
	lBtn = document.getElementById('prevButton');

	req1.send();
})

function nextPage() {
	updatePage(1);
}

function prevPage() {
	updatePage(-1);
}

function updatePage(dir) {
	if (dir > 0) {
		index = pages >= index + 1 ? index + 1 : 1
	} else if (dir < 0) {
		index = 1 <= index - 1 ? index - 1 : pages;
	}

	leftPage.setAttribute('src', '/dependencies/books/' + name + '/leftPages/' + index + '.jpeg');
	// rightPage.setAttribute('src', '/dependencies/books/' + name + '/rightPages/' + index + '.jpg');
}