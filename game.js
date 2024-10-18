const initGame = () => {
    const startGameButton = document.getElementById('start-game');
    startGameButton.addEventListener('click', () => {
        const startGame = confirm("Shall we play rock, paper & scissors?");
        startGame ? playGame() : alert("Ok, can we play next time.");
    });
}

const playGame = () => {
    document.getElementById('game-area').style.display = 'block';

    document.getElementById('rock').addEventListener('click', () => handlePlayerChoice('rock'));
    document.getElementById('paper').addEventListener('click', () => handlePlayerChoice('paper'));
    document.getElementById('scissors').addEventListener('click', () => handlePlayerChoice('scissors'));
}

const handlePlayerChoice = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsarray = ["rock", "paper", "scissors"];
    return rpsarray[randomNumber];
}

const determineWinner = (player, computer) => {
    const winner = 
        player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `PlayerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `PlayerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `PlayerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `PlayerOne: ${player}\nComputer: ${computer}\nPlayerOne wins!`;
    return winner;
}

const displayResult = (result) => {
    document.getElementById('result').innerText = result;
    setTimeout(() => {
        if (confirm("Play again?")) {
            document.getElementById('result').innerText = '';
        } else {
            alert("Thanks for playing!");
            document.getElementById('game-area').style.display = 'none';
        }
    }, 1000);
}

initGame();

