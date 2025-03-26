export default function setIngredients(data) {
	let n = 2;
	let instruction = data["strMeasure1"] + " " + data["strIngredient1"];
	while (data["strIngredient" + n] != "") {
		instruction =
			instruction +
			", " +
			data[`strMeasure${n}`] +
			" " +
			data[`strIngredient${n++}`];
	}
	return instruction;
}
