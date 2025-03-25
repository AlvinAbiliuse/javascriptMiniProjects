function toChange(e) {
	let date = e.querySelector("input").value;
	let tt = date.split("-");

	let oldYear = Number(tt[0]);
	let oldMonth = Number(tt[1]);
	let oldDate = Number(tt[2]);

	let change = e.querySelector("span");
	change.textContent = 21;

	let currDate = new Date();

	let year = currDate.getFullYear();
	let month = currDate.getMonth();
	let today = currDate.getDate();

	console.log(oldYear, year);
	console.log(oldMonth, month);
	console.log(oldDate, today);

	console.log(year, month, today);

	let currAge = 0;
	if (year - oldYear > 0) {
		currAge = currAge + (year - oldYear);
	}
	if (oldMonth < month) {
		currAge++;
	}
	if (oldMonth === month && oldDate <= today) {
		console.log("old");
		currAge++;
	}

	change.textContent = currAge;
}

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	toChange(e.target);
	e.preventDefault();
});
