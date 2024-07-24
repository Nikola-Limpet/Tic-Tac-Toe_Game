
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
  // add event listener to each cell
  cells.forEach((cell, index) => {
    cell.innerHTML = gameState[index];
  });
}

//  Write a function to update the game state array based on the cell that was clicked. This function should update the array with the current player's symbol ("X" or "O") and then call the renderGame function.

function updateGameState(cellIndex) {
  if (gameState[cellIndex] === null) {
    gameState[cellIndex] = gameState.currentPlayer;
    renderGame();
  }
}

// Write a function to switch the current player. This function should check the current player and then update the game state to the other player.


function switchPlayer() {
  gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
}


// Write a function to check for a winner. This function should check the game state array for a winning combination and then update the game state with the winner.  
// If there is a winner, the function should update the game state with the winning player and increment the player's score.

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  winningCombinations.forEach((combination) => {
    const [a, b, c] = combination;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      gameState.winner = gameState.currentPlayer;
      gameState[gameState.currentPlayer].score++;
    }
  });
}

// Write a function to check for a draw. This function should check the game state array for a draw and then update the game state with a draw.

function checkDraw() {
  if (!gameState.includes(null)) {
    gameState.draw = true;
  }
}


// Write a function to reset the game state. This function should reset the game state array and then call the renderGame function.

function resetGame() {
  gameState = {
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
  renderGame();
}

// Write a function to handle a cell click. This function should update the game state array, check for a winner, check for a draw, and then switch the current player.

function handleCellClick(event) {
  const cellIndex = event.target.dataset.index;
  updateGameState(cellIndex);
  checkWinner();
  checkDraw();
  switchPlayer();
}


