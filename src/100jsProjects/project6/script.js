let timer = 25 * 60000;
let timeDisplay = document.querySelector(".time");

timeDisplay.textContent = timer;

function interval() {}

function updateDom() {
	let countdown = setInterval(() => {
		console.log(timer);
		timeDisplay.textContent = timer;
		timer = timer - 100;
	}, 100);
	let pause = document.querySelector("#pause");
	pause.addEventListener("click", () => {
		clearInterval(countdown);
	});
}

updateDom();

let start = document.querySelector("#start");

start.addEventListener("click", () => {
	updateDom("start");
});
