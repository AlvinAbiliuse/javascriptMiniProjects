export default function dropdown() {
	let dropper = document.querySelector(".dropdownBtn");

	dropper.addEventListener("click", (e) => {
		e.target.parentNode.querySelector(".dropdown").classList.toggle("hidden");
	});
}
