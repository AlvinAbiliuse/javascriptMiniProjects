import dropdown from "./dropdown.js";

export default function updateDom(data, n) {
	let container = document.querySelector(".cardContainer");

	let mainCard = document.createElement("div");
	let card = document.createElement("div");
	let image = document.createElement("img");
	let name = document.createElement("h2");
	let ingredients = document.createElement("p");
	let linkContainer = document.createElement("div");
	let dropdownContainer = document.createElement("div");
	let dropdownBtn = document.createElement("button");
	let instructions = document.createElement("p");

	card.className = "card";
	image.src = data.image;
	name.textContent = data.name;
	ingredients.textContent = "Ingredients: " + data.ingredients.join();
	dropdownBtn.className = "dropdownBtn fullBtn";
	dropdownBtn.textContent = "View Full Instructions";
	instructions.className = "dropdown hidden";
	instructions.textContent = data.instructions.join("\n");

	card.appendChild(image);
	card.appendChild(name);
	card.appendChild(ingredients);
	card.appendChild(linkContainer);

	dropdownContainer.appendChild(dropdownBtn);
	dropdownContainer.appendChild(instructions);

	mainCard.appendChild(card);
	mainCard.appendChild(dropdownContainer);
	container.appendChild(mainCard);

	dropdown();
}
