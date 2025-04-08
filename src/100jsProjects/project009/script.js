let input = document.querySelector("#number");

input.addEventListener("input", (e) => {
	if (e.target.value) {
		document.querySelector(".weight").textContent = (
			Number(e.target.value) / 2.205
		).toFixed(2);
	} else {
		document.querySelector(".weight").textContent = "";
		document.querySelector(".message").textContent =
			"Please enter a valid number";
	}
});
