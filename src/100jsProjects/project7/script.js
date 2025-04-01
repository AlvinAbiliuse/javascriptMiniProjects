function playTurn(e) {
	console.log(e);
}

let button = document.querySelectorAll("button");
for (let i = 0; i < 3; i++) {
	button[i].addEventListener("click", (e) => {
		playTurn(
			e.target.className ? e.target.className : e.target.parentNode.className
		);
	});
}

/*



let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");


rock.addEventListener("click", () => console.log("rock"));
paper.addEventListener("click", () => console.log("paper"));
scissors.addEventListener("click", () => console.log("scissors"));

*/
