import setIngredients from "./setIngredients.js";
import dropdown from "./dropdown.js";

export default function updateDom(data, n) {
	let container = document.querySelector(".cardContainer");

	let mainCard = document.createElement("div");
	let card = document.createElement("div");
	let image = document.createElement("img");
	let name = document.createElement("h2");
	let ingredients = document.createElement("p");
	let linkContainer = document.createElement("div");
	let yt = document.createElement("a");
	let recipe = document.createElement("a");
	let dropdownContainer = document.createElement("div");
	let dropdownBtn = document.createElement("button");
	let instructions = document.createElement("p");

	card.className = "card";
	image.src = data.strMealThumb;
	name.textContent = data.strMeal;
	ingredients.textContent = "Ingredients: " + setIngredients(data);
	yt.textContent = "Youtube";
	recipe.textContent = "Recipe Source";
	yt.href = data.strYoutube;
	recipe.href = data.strSource;
	dropdownBtn.className = "dropdownBtn fullBtn";
	dropdownBtn.textContent = "View Full Instructions";
	instructions.className = "dropdown hidden";
	instructions.textContent = data.strInstructions;

	card.appendChild(image);
	card.appendChild(name);
	card.appendChild(ingredients);
	linkContainer.appendChild(yt);
	linkContainer.appendChild(recipe);
	card.appendChild(linkContainer);

	dropdownContainer.appendChild(dropdownBtn);
	dropdownContainer.appendChild(instructions);

	mainCard.appendChild(card);
	mainCard.appendChild(dropdownContainer);
	container.appendChild(mainCard);

	dropdown();
}
