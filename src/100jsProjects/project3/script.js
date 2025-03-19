function toChange(e) {
	let date = e.querySelector("input").value;
	let change = e.querySelector("span");

	let tt = date.split("-");

	let oldYear = tt[0];
	let oldMonth = tt[1];
	let oldDate = tt[2];

	change.textContent = 21;

	let currDate = new Date();

	let year = currDate.getFullYear();
	let month = currDate.getMonth();
	let today = currDate.getDate();

	console.log(oldYear, year);
	console.log(oldMonth, month);
	console.log(oldDate, today);

	console.log(year, month, day);
}

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	toChange(e.target);
	e.preventDefault();
});
