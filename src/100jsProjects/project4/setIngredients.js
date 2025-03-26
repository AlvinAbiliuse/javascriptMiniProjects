export default function setIngredients(data) {
	let n = 2;
	let instruction = data["strIngredient1"];
	while (data["strIngredient" + n] != "") {
		instruction = instruction + ", " + data[`strIngredient${n++}`];
	}
	return instruction;
}
