// window.addEventListener('DOMContentReady', () => {

// 	var pageL = document.querySelector(".pageL")
// 	var pageR = document.querySelector(".pageR")
// 	var index = 0

// 	updatePages(index, pageL, pageR, pageData)

// 	document.querySelector("#nextButton").addEventListener("click", function () {
		// index = pageData.length > index + 1 ? index + 1 : 0
		// updatePages(index, pageL, pageR, pageData)
// 	})

// });

function bookButtonPressed() {
	var req = new XMLHttpRequest();

	req.open('GET', '/books');
	req.send();

	req.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			console.log("SUCCESSFUL FETCH");
		}
	}
}

function formatHighlight(str) {
	return str.replace(/<-/g, "<span style = 'background-color: yellow;'> ").replace(/->/g, " </span>")
}

// function updatePages(ind, pageL, pageR, pageData) {
// 	pageL.innerHTML = formatHighlight(pageData.leftPages[ind])
// 	pageR.innerHTML = formatHighlight(pageData.rightPages[ind])
// }