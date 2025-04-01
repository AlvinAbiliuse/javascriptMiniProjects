function playTurn(user) {
	let result = document.querySelector(".result");
	let userScore = document.querySelector(".userScore");
	let compScore = document.querySelector(".compScore");

	let plays = {
		rock: { beat: "scissors" },
		paper: { beat: "rock" },
		scissors: { beat: "paper" },
	};

	let choices = ["rock", "paper", "scissors"];

	let comp = choices[Math.floor(Math.random() * 3)];

	if (user == comp) {
		result.textContent = "Tie!";
	} else if (plays[user]["beat"] == comp) {
		result.textContent = `You Win! ${user} beats ${comp}`;
		userScore.textContent = Number(userScore.textContent) + 1;
	} else if (plays[comp]["beat"] == user) {
		result.textContent = `Opponent Wins! ${comp} beats ${user}`;
		compScore.textContent = Number(compScore.textContent) + 1;
	}
}

let button = document.querySelectorAll("button");
for (let i = 0; i < 3; i++) {
	button[i].addEventListener("click", (e) => {
		playTurn(e.target.classList[0]);
	});
	button[i].addEventListener("mouseover", (e) => {
		e.target.classList.add("shake");
		setTimeout(() => {
			e.target.classList.remove("shake");
		}, 2000);
	});

	button[i].addEventListener("mouseout", (e) => {
		e.target.classList.remove("shake");
	});
}
