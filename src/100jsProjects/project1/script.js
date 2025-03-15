import { data } from "./data.js";

let currentState = 0;

function updateState() {
	if (currentState === Object.keys(data).length) {
		currentState = 0;
	} else {
		currentState++;
	}
}

console.log(data[Object.keys(data)[currentState]]);
updateState();

setInterval(() => {
	console.log(data[Object.keys(data)[currentState]]);
	updateState();
}, 5000);
