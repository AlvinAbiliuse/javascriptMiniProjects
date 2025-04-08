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
	let body = document.querySelector("body");
	let currentSlider = document.querySelector("#slider");
	currentSlider.remove();
	let slider = document.createElement("div");
	let card = document.createElement("div");
	let image = document.createElement("img");
	let testimonial = document.createElement("p");
	let name = document.createElement("p");

	slider.id = "slider";
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
	body.appendChild(slider);
}

updateDom();
updateState();

setInterval(() => {
	updateDom();
	updateState();
}, 10000);
