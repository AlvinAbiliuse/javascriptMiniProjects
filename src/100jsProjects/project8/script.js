let time = 0;

let hours = 0;
let minutes = 0;
let seconds = 0;
let ms = 0;

let timeDisplay = document.querySelector(".tempDisplay");

let interval;
let started = false;

function startInterval() {
	if (started === false) {
		started = true;
		interval = setInterval(() => {
			if (ms != 1000) {
				ms = ms + 100;
			} else if (seconds !== 59) {
				ms = 0;
				seconds++;
			} else if (minutes !== 59) {
				seconds = 0;
				minutes++;
			} else {
				minutes = 0;
				hours++;
			}

			console.log(hours, minutes, seconds, ms);
			timeDisplay.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
		}, 100);
	}
}

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

start.addEventListener("click", startInterval);

stop.addEventListener("click", () => {
	clearInterval(interval);
	started = false;
});

reset.addEventListener("click", () => {
	clearInterval(interval);
	[hours, minutes, seconds, ms] = [0, 0, 0, 0];
	started = false;
});
