import { data } from "./data.js";

let currentState = 0;

function updateState() {
	if (currentState === Object.keys(data).length - 1) {
		currentState = 0;
	} else {
		currentState++;
	}
}

function updateDom() {
	console.log(data[Object.keys(data)[currentState]]);
	let slider = document.querySelector("#slider");
	slider.innerHTML = "";
	let card = document.createElement("div");
	let image = document.createElement("img");
	let testimonial = document.createElement("p");
	let name = document.createElement("p");

	card.className = "card";
	name.className = "name";

	image.src = data[Object.keys(data)[currentState]]["image"];
	testimonial.textContent =
		data[Object.keys(data)[currentState]]["testimonial"];
	name.textContent = data[Object.keys(data)[currentState]]["name"];

	slider.appendChild(image);
	card.appendChild(testimonial);
	card.appendChild(name);
	slider.appendChild(card);
}

updateDom();
updateState();

setInterval(() => {
	updateDom();
	updateState();
}, 10000);
