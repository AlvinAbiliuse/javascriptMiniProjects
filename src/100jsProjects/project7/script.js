function playTurn(user) {
	let result = document.querySelector(".result");
	let userScore = document.querySelector(".userScore");
	let compScore = document.querySelector(".compScore");

	let plays = {
		rock: { beat: "scissors", lose: "paper" },
		paper: { beat: "rock", lose: "scissors" },
		scissors: { beat: "paper", lose: "rock" },
	};

	let choices = ["rock", "paper", "scissors"];

	let comp = choices[Math.random() * 3];
	console.log(user, comp);
	if (plays[user]["beat"] == comp) {
		console.log(`User Wins! ${user} beats ${comp}`);
		userScore.textContent = Number(userScore.textContent) + 1;
	} else if (plays[comp]["beat"] == user) {
		console.log(`Opponent Wins! ${comp} beats ${user}`);
		compScore.textContent = Number(compScore.textContent) + 1;
	}
}

let button = document.querySelectorAll("button");
for (let i = 0; i < 3; i++) {
	button[i].addEventListener("click", (e) => {
		playTurn(e.target.classList[0]);
	});
	button[i].addEventListener("mouseover", (e) => {
		console.log(e);
		e.target.classList.add("shake");
		setTimeout(() => {
			e.target.classList.remove("shake");
		}, 2000);
	});

	button[i].addEventListener("mouseout", (e) => {
		e.target.classList.remove("shake");
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
