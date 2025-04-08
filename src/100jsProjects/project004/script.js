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
				let currentBtn = e.target.parentNode.querySelector(".dropdownBtn");
				let path = e.target.parentNode.querySelector(".dropdown");
				if (path.classList.contains("hidden")) {
					currentBtn.textContent = "Close Full Instructions";
				} else {
					currentBtn.textContent = "View Full Instructions";
				}
				path.classList.toggle("hidden");
			});
		}
	});
