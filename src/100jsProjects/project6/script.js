let timer = 25 * 60000;
let timeDisplay = document.querySelector(".time");

timeDisplay.textContent = timer;

let countdown;

function updateDom() {
	let time = timer / 60000;
	let minute = time.toString().split(".")[0];
	try {
		console.log(time.toString().split(".")[1] * 60);
		console.log(time);
	} catch {}
	let seconds = time.toString().split(".")[1]
		? time.toString().split(".")[1] * 60
		: "00";
	timeDisplay.textContent = minute + ":" + seconds;
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
	clearInterval(countdown);
	interval();
});

pause.addEventListener("click", () => clearInterval(countdown));

reset.addEventListener("click", () => {
	clearInterval(countdown);
	timer = 25 * 60000;
	updateDom();
});
