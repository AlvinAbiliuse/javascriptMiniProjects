import updateDom from "./updateDom.js";

async function hello(fet, js) {
	let req = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
	let json = await req.json();

	updateDom(json.meals[0]);
}

for (let i = 0; i < 10; i++) {
	hello();
}

let dropdown = document.querySelector(".dropdownBtn");

dropdown.addEventListener("click", (e) => console.log(e));
