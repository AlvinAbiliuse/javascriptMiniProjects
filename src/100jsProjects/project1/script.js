import { data } from "./data.js";

let currentState = 0;

function updateState() {
	if (currentState === Object.keys(data).length - 1) {
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
