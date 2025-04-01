let time = 0;

let hours = 0;
let minutes = 0;
let seconds = 0;
let ms = 0;

let timeDisplay = document.querySelector(".tempDisplay");

let interval;

function startInterval() {
	interval = setInterval(() => {
		if (ms != 1000) {
			ms++;
		} else if (seconds !== 60) {
			ms = 0;
			second++;
		} else if (minutes !== 60) {
			seconds = 0;
			minute++;
		} else {
			minute = 0;
			hours++;
		}
		timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
	}, 100);
}

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

start.addEventListener("click", startInterval);

stop.addEventListener("click", () => {
	clearInterval(interval);
});

reset.addEventListener("click", () => {
	clearInterval(interval);
	[hours, minutes, seconds, ms] = [0, 0, 0, 0];
});
