// Set up game controller console version using IIFE pattern
const GameController = (function() {
    let player1, player2;
    let currentPlayer;
    let gameActive = false;
    let scores = {
        playerX: 0,
        playerO: 0,
        draw: 0
    }

    const initGame = () => {
        player1 = createPlayer('Player 1', 'X');
        player2 = createPlayer('Player 2', 'O');
        currentPlayer = player1;
        gameActive = true;

        Board.resetBoard();
        updateScoreDisplay();
        console.log('Game initialized!');
        console.log(`${player1.getName()} (${player1.getMarker}) vs ${player2.getName()} (${player2.getMarker})`);
        Board.displayBoard();
    };

    const updateScore = (result) => {
        if (result === 'X') {
            scores.playerX++;
        } else if (result === 'O') {
            scores.playerO++;
        } else {
            scores.draw++;
        }
        updateScoreDisplay();
    };

    const updateScoreDisplay = () => {
        document.querySelector('.player-x-score').textContent = scores.playerX;
        document.querySelector('.player-o-score').textContent = scores.playerO;
        document.querySelector('.draw-score').textContent = scores.draw;
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
                return { marker: board[a], pattern: pattern };
            }
        }
        return null;
    };

    const checkGameEnd = () => {
        const winner = checkWinner();
        if (winner) {
            const winnerName = winner.marker === player1.getMarker() ? player1.getName() : player2.getName();
            
            updateScore(winner.marker);

            const winnerColor = winner.marker === 'X' ? '#48D2FE' : '#E2BE00';
            winner.pattern.forEach(index => {
                const cell = Board.getBoardElement().children[index];                
                if (cell) {
                    cell.classList.add('winning-cell');
                    cell.setAttribute('style', `border-color: ${winnerColor} !important;`);                    
                }
            });

            setTimeout(() => {
                showWinnerModal(winnerName);
            }, 500);

            gameActive = false;
            return true;
        }

        if (Board.getBoard().every(cell => cell !== null)) {
            updateScore('draw');
            setTimeout(() => {
                showWinnerModal('Draw');
            }, 500);
            gameActive = false;
            return true;
        }

        return false;
    };

    const showWinnerModal = (winnerName) => {
        const modal = document.getElementById('winner-modal');
        const message = document.getElementById('winner-message');
        if (winnerName === 'Draw') {
            message.textContent = '🎉 It\'s a Draw! 🎉';
        } else {
            message.textContent = `🎉 ${winnerName} Wins! 🎉`;
        }
        modal.classList.remove('hidden');
    };

    const resetScores = () => {
        scores = {
            playerX: 0,
            playerO: 0,
            draw: 0
        };
        updateScoreDisplay();
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

        const cell = document.querySelector(`.cell[data-index="${index}"]`);
        if (cell) {
            cell.classList.add('filled');
        }

        if (checkGameEnd()) {
            Board.getResetButton().classList.add('hide-button');
            Board.getStartButton().classList.remove('hide-button');
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

    const toggleButtons = () => {
        Board.getStartButton().classList.add('hide-button');
        Board.getResetButton().classList.remove('hide-button');
    }

    return {
        initGame,
        makeMove,
        getCurrentPlayer,
        isGameActive,
        restartGame,
        startGame,
        checkWinner,
        switchPlayer,
        toggleButtons,
        resetScores,
        updateScoreDisplay
    };
})();

document.querySelector('.reset-button').addEventListener('click', () => {
    GameController.restartGame();
    GameController.resetScores();
});

document.querySelector('.start-button').addEventListener('click', () => {
    GameController.startGame();
    GameController.toggleButtons();
});

document.addEventListener('DOMContentLoaded', () => {
    GameController.startGame();

    document.getElementById('play-again-btn').addEventListener('click', () => {
        document.getElementById('winner-modal').classList.add('hidden');
        GameController.restartGame();
        GameController.toggleButtons();
    });
    // Use GameController.makeMove(0) to make moves (0-8 for positions)
    // Use GameController.restartGame() to restart
});