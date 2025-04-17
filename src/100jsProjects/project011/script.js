console.log("hello world");

let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");

function updateDom(e) {
	let current = e.value;
	let list = ["celsius", "fahrenheit", "kelvin"];
	list.splice(list.indexOf(e.id), 1);

	if (current) {
		if (e.id === "celsius") {
			fahrenheit.value = (Number(e.value) * 9) / 5 + 32;
			kelvin.value = Number(e.value) + 273.15;
		} else if (e.id === "fahrenheit") {
			celsius.value = ((Number(e.value) - 32) * 9) / 5;
			kelvin.value = ((Number(e.value) - 32) * 9) / 5 + 273.15;
		} else if ((e.id = "kelvin")) {
			celsius.value = Number(e.value) - 273.15;
			fahrenheit.value = ((Number(e.value) - 273.15) * 9) / 5 + 32;
		}
	} else {
		current = 0;
		celsius.value = "";
		fahrenheit.value = "";
		kelvin.value = "";
	}

	console.log(celsius.value);
	console.log(fahrenheit.value);
	console.log(kelvin.value);
	console.log("\n\n");
	/*
	for (let i = 0; i < list.length; i++) {
		if (current) {
			if (list[i] === "celsius") {
				celsius.value = "Celsius";
			} else if (list[i] === "fahrenheit") {
				fahrenheit.value = "fahrenheit";
			} else if (list[i] === "kelvin") {
				kelvin.value = "kelvin";
			}
		} else {
			celsius.value = "";
			fahrenheit.value = "";
			kelvin.value = "";
		}
	}
	*/
}

let interval;

function start(e) {
	setInterval(() => updateDom(e.target), 100);
}

function stop() {
	clearInterval(interval);
}

let inputs = document.querySelectorAll("input");

inputs.forEach((e) => {
	e.addEventListener("change", (j) => {
		updateDom(j.target);
	});
});
/*

inputs.forEach((e) => {
	e.addEventListener("focusout", (j) => {
		stop();
	});
});


celsius.addEventListener("focus", (e) => {
	start(e);
});

fahrenheit.addEventListener("focus", (e) => {
	start(e);
});

kelvin.addEventListener("focus", (e) => {
	start(e);
});

celsius.addEventListener("focusout", (e) => {
	stop();
});

fahrenheit.addEventListener("focusout", (e) => {
	stop();
});

kelvin.addEventListener("focusout", (e) => {
	stop();
});

[celsius, fahrenheit, kelvin]j.forEach((e) => {
	e.value = "hello";
});

*/
