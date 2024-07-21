let playAgain = document.querySelector('#reset');
playAgain.addEventListener('click', function() { 
    location.reload();
});
// built tic tac toe game

let playerSelection;
let computerSelection;

const gameBoard = (() =>
{
    let board = ['', '', '', '', '', '', '', '', ''];
    let player = 'X';
    let computer = 'O';
    let currentPlayer = player;
    let gameOver = false;
});
    const getBoard = () => board; 
    const getCurrentPlayer = () => currentPlayer;
    const getGameOver = () => gameOver;
    const getPlayer = () => player;
    const getComputer = () => computer;

    const checkWinner = () =>

    {
        if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer)
        {
            gameOver = true;
        }
        else if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer)
        {
            gameOver = true;
        }
        else if (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer)
        {
            gameOver = true;
        }
        else if (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer)
        {
            gameOver = true;
        }
        else if (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer)
        {
            gameOver = true;
        }
        else if (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer)
        {
            gameOver = true;
        }
        else if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer)
        {
            gameOver = true;
        }
        else if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer)
        {
            gameOver = true;
        }
    }

    const checkTie = () =>
    {
        if (board.every((element) => element !== ''))
        {
            gameOver = true;
        }
    }

    const changePlayer = () =>
    {
        currentPlayer = currentPlayer === player ? computer : player;
    }

    const makeMove = (index) =>
    {
        if (board[index] === '' && !gameOver)
        {
            board[index] = currentPlayer;
            checkWinner();
            checkTie();
            changePlayer();
        }
    }

    const computerMove = () =>
    {
        if (!gameOver)
        {
            let index = Math.floor(Math.random() * 9);
            while (board[index] !== '')
            {
                index = Math.floor(Math.random() * 9);
            }
            board[index] = currentPlayer;
            checkWinner();
            checkTie();
            changePlayer();
        }
    }

    const reset = () =>
    {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = player;
        gameOver = false;
    }

    return { getBoard, getCurrentPlayer, getGameOver, getPlayer, getComputer, makeMove, computerMove, reset };


