let dice = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];

function rollDice() {
	let current = document.querySelector(".roll");
	current.classList.toggle("wobble");
	setTimeout(() => current.classList.toggle("wobble"), 1000);
}

let button = document.querySelector("button");

button.addEventListener("click", rollDice);
