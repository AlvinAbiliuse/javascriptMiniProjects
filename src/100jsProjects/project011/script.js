console.log("hello world");

let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");

function updateDom(e) {
	let current = e.value;
	let list = ["celsius", "fahrenheit", "kelvin"];
	list.splice(list.indexOf(e.id), 1);

	if (current === "celsius") {
		fahrenheit.value = (Number(e.value) * 9) / 5 + 32;
		kelvin.value = Number(e.value) + 273.15;
	} else if (current === "fahrenheit") {
		celsius.value = ((Number(e.value) - 32) * 9) / 5;
		kelvin.value = ((Number(e.value) - 32) * 9) / 5 + 273.15;
	} else if ((current = "kelvin")) {
		celsius.value = Number(e.value) - 273.15;
		fahrenheit.value = ((Number(e.value) - 273.15) * 9) / 5 + 32;
	}
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

celsius.addEventListener("focus", (i) => {
	setInterval(() => updateDom(i.target), 100);
});

fahrenheit.addEventListener("focus", (i) => {
	setInterval(() => updateDom(i.target), 100);
});

kelvin.addEventListener("focus", (i) => {
	setInterval(() => updateDom(i.target), 100);
});
