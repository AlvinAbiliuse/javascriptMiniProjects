let dice = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];

let n = 1;
function rollDice() {
	let current = document.querySelector(".roll");
	let pastEvents = document.querySelector(".events");

	let card = document.createElement("div");
	let rollNum = document.createElement("p");
	let diceEvent = document.createElement("p");
	card.className = "card";
	rollNum.textContent = `Roll ${n++}:`;

	random = dice[Math.floor(Math.random() * dice.length)];

	diceEvent.innerHTML = random;

	card.appendChild(rollNum);
	card.appendChild(diceEvent);

	current.classList.toggle("wobble");
	setTimeout(() => {
		current.innerHTML = random;
		pastEvents.appendChild(card);
		current.classList.toggle("wobble");
	}, 1000);
}

let button = document.querySelector("button");

button.addEventListener("click", rollDice);
