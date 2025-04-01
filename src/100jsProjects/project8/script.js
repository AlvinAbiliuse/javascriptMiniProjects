let time = 0;

let hours = 0;
let minutes = 0;
let seconds = 0;

let timeDisplay = document.querySelector(".tempDisplay");

let interval;

function startInterval() {
	interval = setInterval(() => {}, 100);
}

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
