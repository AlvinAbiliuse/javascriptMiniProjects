import { data } from "./data.js";

function updateDom(curr) {
	let img = document.querySelector("img");
	let title = document.querySelector(".title");
	let desc = document.querySelector(".description");
	document.querySelectorAll("button").forEach((e) => {
		if (e.className) e.classList.remove("current");
	});
	if (curr.className) curr.classList.add("current");
	let current = data[curr.classList[0]];
	img.src = current.img;
	title.textContent = current.title;
	desc.textContent = current.description;
}

updateDom(document.querySelector(".one"));

document.querySelectorAll("button").forEach((e) => {
	e.addEventListener("click", (curr) => {
		updateDom(curr.target);
	});
});
