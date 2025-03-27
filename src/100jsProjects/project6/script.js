let timer = 25 * 60000;
let timeDisplay = document.querySelector(".time");

timeDisplay.textContent = timer;

let countdown;

function updateDom() {
	timeDisplay.textContent = timer;
}

function interval() {
	countdown = setInterval(() => {
		console.log(timer);
		updateDom();
		timer = timer - 100;
	}, 100);
}

updateDom();

let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let reset = document.querySelector("#reset");

start.addEventListener("click", () => interval());

pause.addEventListener("click", () => clearInterval(countdown));

reset.addEventListener("click", () => {
	clearInterval(countdown);
	timer = 25 * 60000;
	updateDom();
});
