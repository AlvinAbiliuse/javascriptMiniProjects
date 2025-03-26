import updateDom from "./updateDom.js";

async function hello(fet, js) {
	for (let i = 0; i < 10; i++) {
		let req = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
		let json = await req.json();

		updateDom(json.meals[0]);
	}
}

hello();
