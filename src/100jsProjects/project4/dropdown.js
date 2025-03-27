export default function dropdown() {
	let dropper = document.querySelector(".dropdownBtn");

	dropper.addEventListener("click", (e) => {
		let temp = e.target.parentNode.querySelector(".dropdown");
		temp.classList.toggle("hidden");
		console.log("hidden" in temp);
	});
}
