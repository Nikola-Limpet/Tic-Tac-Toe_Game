
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
};

// Write a function to render the game board based on the game state array. This function should update the innerHTML of the board's cells to show an "X" or "O" based on the array's values.