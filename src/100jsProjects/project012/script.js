import { data } from "./data.js";

function updateDom(curr) {
	document
		.querySelectorAll("button")
		.forEach((e) => e.target.classList.remove("current"));
	curr.classList.add("current");
	console.log(data[curr.className]);
}

document.querySelectorAll("button").forEach((e) => {
	e.addEventListener("click", (curr) => {
		updateDom(curr.target);
	});
});
