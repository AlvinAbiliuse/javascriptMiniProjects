import { data } from "./data.js";

function updateDom(curr) {
	let img = document.querySelector("img");
	let desc = document.querySelector(".rightLower");
	document.querySelectorAll("button").forEach((e) => {
		if (e.className) e.classList.remove("current");
	});
	if (curr.className) curr.classList.add("current");
	let current = data[curr.classList[0]];
	img.src = current.img;
	desc = current.description;
}

document.querySelectorAll("button").forEach((e) => {
	e.addEventListener("click", (curr) => {
		updateDom(curr.target);
	});
});
