
function updateDom(e) {
	let celsius = document.querySelector("#celsius");
	let fahrenheit = document.querySelector("#fahrenheit");
	let kelvin = document.querySelector("#kelvin");
	let current = e.target.value;
	let list = ["celsius", "fahrenheit", "kelvin"];
	list.splice(list.indexOf(e.target.id), 1);

	if (current) {
		if (e.target.id === "celsius") {
			fahrenheit.value = (Number(e.target.value) * 9) / 5 + 32;
			kelvin.value = Number(e.target.value) + 273.15;
		} else if (e.id === "fahrenheit") {
			celsius.value = ((Number(e.target.value) - 32) * 9) / 5;
			kelvin.value = ((Number(e.target.value) - 32) * 9) / 5 + 273.15;
		} else if ((e.target.id = "kelvin")) {
			celsius.value = Number(e.target.value) - 273.15;
			fahrenheit.value = ((Number(e.target.value) - 273.15) * 9) / 5 + 32;
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
}
