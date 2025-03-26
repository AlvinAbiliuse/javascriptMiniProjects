import setIngredients from "./setIngredients.js";

async function hello(fet, js) {
	let req = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
	let json = await req.json();

	updateDom(json.meals[0]);
}

function updateDom(data) {
	console.log(data);
	let image = document.createElement("img");
	let name = document.createElement("h2");
	let ingredients = document.createElement("p");
	let linkContainer = document.createElement("div");
	let yt = document.createElement("button");
	let recipe = document.createElement("button");
	let dropdownContainer = document.createElement("div");
	let dropdownBtn = document.createElement("button");
	let instructions = document.createElement("p");

	image.src = data.strMealThumb;
	name.textContent = data.strMeal;
	ingredients.textContent = setIngredients(data);
}

for (let i = 0; i < 10; i++) {
	hello();
}
