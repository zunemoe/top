// Game board module using IIFE pattern
const Board = (() => {
    let board = Array(9).fill(null); // Initialize a 3x3 board with null values
    let boardElement = document.querySelector('.game-board');
    let resetButton = document.querySelector('.reset-button');
    let startButton = document.querySelector('.start-button');
    
    const getBoard = () => board;
    const getBoardElement = () => boardElement;
    const getResetButton = () => resetButton;
    const getStartButton = () => startButton;

    const setMarker = (index, marker) => {
        if (isValidMove(index)) {
            board[index] = marker; // Set the marker at the specified index

            if (boardElement && boardElement.children[index]) {
            const cell = boardElement.children[index];
            cell.textContent = marker; // Update the UI
            cell.classList.add(marker === 'X' ? 'player-x-cell' : 'player-o-cell');
            // Force reflow to ensure styles are applied
            // void cell.offsetWidth;
        }
            return true; // Successfully set the marker
        }
        return false; // Invalid move
    };

    const isValidMove = (index) => {
        return index >= 0 && index < board.length && !board[index];
    };

    const resetBoard = () => {
        board = Array(9).fill(null); // Reset the board to its initial state
        boardElement.innerHTML = ''; // Clear the board display
    };

    // Display board in console
    // Display the board to UI
    // How to differentiate between console and web display?
    const displayBoard = () => {
        // For console display
        // console.log('\n--- Game Board ---');
        // console.log(`${board[0] || '0'} | ${board[1] || '1'} | ${board[2] || '2'}`);
        // console.log('---------');
        // console.log(`${board[3] || '3'} | ${board[4] || '4'} | ${board[5] || '5'}`);
        // console.log('---------');
        // console.log(`${board[6] || '6'} | ${board[7] || '7'} | ${board[8] || '8'}`);
        // console.log('------------------\n');
        // For web display, you would update the DOM elements instead
        boardElement = document.querySelector('.game-board');
        boardElement.innerHTML = ''; // Clear previous board display
        board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            cellElement.textContent = cell || null; // Show index if cell is empty
            cellElement.dataset.index = index; // Store index for event handling
            cellElement.addEventListener('click', () => {
                console.log(`Cell ${index} clicked!`);
                GameController.makeMove(index);
            });
            boardElement.appendChild(cellElement);
        });
    };

    const isFull = () => {
        return board.every(cell => cell !== null);
    };

    return {
        getBoard,
        setMarker,
        isValidMove,
        resetBoard,
        displayBoard,
        isFull,
        getResetButton,
        getStartButton,
        getBoardElement
    };
})();
