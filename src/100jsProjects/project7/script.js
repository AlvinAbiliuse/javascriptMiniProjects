function playTurn(user) {
	let comp = ["rock", "paper", "scissors"][Math.random() * 3];
	console.log(user, comp);
}

let button = document.querySelectorAll("button");
for (let i = 0; i < 3; i++) {
	button[i].addEventListener("click", (e) => {
		playTurn(
			e.target.className != "gameMove"
				? e.target.className
				: e.target.parentNode.className
		);
	});
	button[i].addEventListener("mouseover", (e) => {
		console.log(e);
		e.target.querySelector("span").classList.add("shake");
		setTimeout(() => {
			e.target.querySelector("span").classList.remove("shake");
		}, 2000);
	});

	button[i].addEventListener("mouseout", (e) => {
		e.target.querySelector("span").classList.remove("shake");
	});
}

/*

let gameMove = document.querySelectorAll(".gameMove");
for (let i = 0; i < 3; i++) {
	console.log(gameMove[i]);
	gameMove[i].addEventListener("mouseover", (e) => {
		console.log("hi");
	});
}



let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");


rock.addEventListener("click", () => console.log("rock"));
paper.addEventListener("click", () => console.log("paper"));
scissors.addEventListener("click", () => console.log("scissors"));

*/
