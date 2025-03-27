import updateDom from "./updateDom.js";
import dropdown from "./dropdown.js";

fetch("https://dummyjson.com/recipes?limit=10")
	.then((res) => res.json())
	.then((res) => {
		for (let i in res.recipes) {
			updateDom(res.recipes[i]);
			console.log(res.recipes[i]);
		}
	});
