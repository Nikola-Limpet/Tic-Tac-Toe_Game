
let currentPlaying = null;

let gameState = {
  player1: {
    name: "Player 1",
    score: 0,
    choice: null,

  },
  player2: {
    name: "Player 2",
    score: 0,
    choice: null,
  },
  currentPlayer: null,
  winner: null,
  draw: false,  
};

// Write a function to render the game board based on the game state array. This function should update the innerHTML of the board's cells to show an "X" or "O" based on the array's values.

function renderGame() {
  const player1 = document.querySelector("#player1");
  const player2 = document.querySelector("#player2");

  player1.innerHTML = `${gameState.player1.name}: ${gameState.player1.score}`;
  player2.innerHTML = `${gameState.player2.name}: ${gameState.player2.score}`;

  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell, index) => {
    cell.innerHTML = gameState[index];
  });
}

// 