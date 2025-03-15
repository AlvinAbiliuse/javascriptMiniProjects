let form = document.querySelector("form");

function getTotal(e) {
	let bill = Number(e.querySelector("#total").value);
	let tip = Number(e.querySelector("#tip").value);
	let toChange = e.querySelector(".totalAmount");

	toChange.textContent = bill + (tip * bill) / 100;
}

form.addEventListener("submit", (e) => {
	getTotal(e.target);
	e.preventDefault();
});
