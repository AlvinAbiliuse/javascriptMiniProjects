import { data } from "./data.js";

function updateDom(curr) {
	document.querySelectorAll("button").forEach((e) => {
		if (e.className) e.classList.remove("current");
	});
	if (curr.className) curr.classList.add("current");
	console.log(data[curr.classList[0]]);
}

document.querySelectorAll("button").forEach((e) => {
	e.addEventListener("click", (curr) => {
		updateDom(curr.target);
	});
});
