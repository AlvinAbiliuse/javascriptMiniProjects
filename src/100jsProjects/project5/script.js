let button = document.querySelector("button");

let current = document.querySelector(".roll");

button.addEventListener("click", () => {
	current.classList.toggle("wobble");
});
