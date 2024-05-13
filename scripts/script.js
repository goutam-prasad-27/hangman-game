const queryDisplay = document.querySelector(".queryDisplay");
const keyboard = document.querySelector(".keyboard");
const guessesText = document.querySelector(".guesses b");
const hangmanImg = document.querySelector(".hangBox img");
const gameEnd = document.querySelector(".gameEnd");
const playAgain = document.querySelector(".playAgain");

let correctLetter = [];
let currentWord;
let wrongGuesses = 0;
const maxGuesses = 6;

//* the hangman game reset function ...
const resetGame = () => {
	correctLetter = [];
	wrongGuesses = 0;
	hangmanImg.src = `images/hangman-${wrongGuesses}.svg`;
	guessesText.innerText = `${wrongGuesses} / ${maxGuesses}`;
	keyboard.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
	queryDisplay.innerHTML = currentWord
		.split("")
		.map(() => `<li class="letter"></li>`)
		.join();
	gameEnd.classList.remove("show");
};

//* calling the all hints & ans from the main-data.js file ...
const getMainData = () => {
	const { ans, hint } = mainData[Math.floor(Math.random() * mainData.length)];
	currentWord = ans;
	console.log(ans);
	document.querySelector(".hint b").innerText = hint;
	resetGame();
};

//* the hangman game end result massage ...
const gameOver = (isWinner) => {
	setTimeout(() => {
		const modelText = isWinner
			? `You've uncovered the answer.:`
			: `The right response was:`;
		gameEnd.querySelector("img").src = `images/${
			isWinner ? "victory" : "lost"
		}.gif`;
		gameEnd.querySelector("h4").innerText = `${
			isWinner ? "Congratulations" : "Game Over"
		}`;
		gameEnd.querySelector("p").innerHTML = `${modelText} <b>${currentWord}</b>`;
		gameEnd.classList.add("show");
	}, 200);
};

//* the hangman game start function ...
const initGame = (button, clickedLetter) => {
	if (currentWord.includes(clickedLetter)) {
		[...currentWord].forEach((letter, index) => {
			if (letter === clickedLetter) {
				correctLetter.push(letter);
				queryDisplay.querySelectorAll("li")[index].innerText = letter;
				queryDisplay.querySelectorAll("li")[index].classList.add("guessed");
			}
		});
	} else {
		wrongGuesses++;
		hangmanImg.src = `images/hangman-${wrongGuesses}.svg`;
	}
	button.disabled = true;
	guessesText.innerText = `${wrongGuesses} / ${maxGuesses}`;
	if (wrongGuesses === maxGuesses) return gameOver(false);
	if (correctLetter.length === currentWord.length) return gameOver(true);
};

//* keyboard buttons ...
for (let i = 97; i <= 122; i++) {
	const button = document.createElement("button");
	button.innerText = String.fromCharCode(i);
	keyboard.appendChild(button);
	button.addEventListener("click", (g) =>
		initGame(g.target, String.fromCharCode(i))
	);
}

//* the hangman game starts here ...
getMainData();

//* the hangman game restarts here ...
playAgain.addEventListener("click", getMainData);
