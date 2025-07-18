let timer = 25 * 60000;
let minuteDisplay = document.querySelector(".minute");
let secondDisplay = document.querySelector(".second");

let countdown;

let started = false;

function updateDom() {
	let time = timer / 60000;
	let minute = time.toString().split(".")[0];
	let splitSec = time.toString().split(".")[1]
		? (time.toString().split(".")[1] * 60).toString().split("")
		: ["0", "0"];
	let seconds = splitSec[0] + splitSec[1];
	minuteDisplay.textContent = minute;
	secondDisplay.textContent = seconds;
}

function interval() {
	countdown = setInterval(() => {
		updateDom();
		timer = timer - 100;
	}, 100);
}

updateDom();

let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let reset = document.querySelector("#reset");

start.addEventListener("click", () => {
	if (!started) {
		started = true;
		clearInterval(countdown);
		interval();
	}
});

pause.addEventListener("click", () => {
	started = false;
	clearInterval(countdown);
});

reset.addEventListener("click", () => {
	started = false;
	clearInterval(countdown);
	timer = 25 * 60000;
	updateDom();
});
