async function hello(fet, js) {
	let req = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
	let json = await req.json();

	updateDom(json.meals[0]);
}

function updateDom(data) {
	console.log(data);
}

for (let i = 0; i < 10; i++) {
	hello();
}
