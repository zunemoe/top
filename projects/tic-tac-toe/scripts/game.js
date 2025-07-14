// Set up game controller console version using IIFE pattern
const GameController = (function() {
    let player1, player2;
    let currentPlayer;
    let gameActive = false;
    let gameMode = 'console'; // console or web

    const initGame = () => {
        player1 = createPlayer('Player 1', 'X');
        player2 = createPlayer('Player 2', 'O');
        currentPlayer = player1;
        gameActive = true;

        Board.resetBoard();
        console.log('Game initialized!');
        console.log(`${player1.getName()} (${player1.getMarker}) vs ${player2.getName()} (${player2.getMarker})`);
        Board.displayBoard();
    };

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        console.log(`It's now ${currentPlayer.getName()}'s turn!`);
    };

    const checkWinner = () => {
        const board = Board.getBoard();
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const checkGameEnd = () => {
        const winner = checkWinner();
        if (winner) {
            const winnerName = winner === player1.getMarker() ? player1.getName() : player2.getName();
            console.log(`Congratulations! ${winnerName} wins!`);
            gameActive = false;
            return true;
        }
        return false;
    };

    const makeMove = (position) => {
        if (!gameActive) {
            console.log('Game is not active. Please start a new game.');
            return;
        }

        const index = parseInt(position);
        if (isNaN(index) || !Board.isValidMove(index)) {
            console.log('Invalid move. Please try again.');
            return false;
        }

        Board.setMarker(index, currentPlayer.getMarker());
        // Board.displayBoard();

        if (checkGameEnd()) {
            return true;
        }

        switchPlayer();
        console.log(`Next turn: ${currentPlayer.getName()} (${currentPlayer.getMarker()})`);
        return true;
    };

    const getCurrentPlayer = () => currentPlayer;
    const isGameActive = () => gameActive;
    const restartGame = () => {
        console.log('Restarting game...');
        initGame();
    };

    const startGame = () => {
        initGame();
        console.log('Game started! Players can make moves by entering positions (0-8).');
    };

    return {
        initGame,
        makeMove,
        getCurrentPlayer,
        isGameActive,
        restartGame,
        startGame,
        checkWinner,
        switchPlayer
    };
})();

// Add event listener for start button to start the game
document.querySelector('.start-button').addEventListener('click', () => {
    console.log('Starting game...');
    GameController.startGame();
});

// document.addEventListener('DOMContentLoaded', () => {
//     GameController.startGame();
//     // Use GameController.makeMove(0) to make moves (0-8 for positions)
//     // Use GameController.restartGame() to restart
// });