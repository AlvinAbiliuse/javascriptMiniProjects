import updateDom from "./updateDom.js";

fetch("https://dummyjson.com/recipes?limit=10")
	.then((res) => res.json())
	.then((res) => {
		for (let i in res.recipes) {
			updateDom(res.recipes[i]);
		}
	})
	.then(() => {
		let tt = document.querySelectorAll(".dropdownBtn");
		for (let i = 0; i < tt.length; i++) {
			tt[i].addEventListener("click", (e) => {
				let path = e.target.parentNode.querySelector(".dropdown");
				path.classList.toggle("hidden");
			});
		}
	});
