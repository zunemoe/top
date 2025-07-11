// Game board module using IIFE pattern
const Board = (() => {
    let board = Array(9).fill(null); // Initialize a 3x3 board with null values

    const getBoard = () => board;

    const setMarker = (index, marker) => {
        if (isValidMove(index)) {
            board[index] = marker; // Set the marker at the specified index
            return true; // Successfully set the marker
        }
        return false; // Invalid move
    };

    const isValidMove = (index) => {
        return index >= 0 && index < board.length && !board[index];
    };

    const resetBoard = () => {
        board = Array(9).fill(null); // Reset the board to its initial state
    };

    const displayBoard = () => {
        console.log('\n--- Game Board ---');
        console.log(`${board[0] || '0'} | ${board[1] || '1'} | ${board[2] || '2'}`);
        console.log('---------');
        console.log(`${board[3] || '3'} | ${board[4] || '4'} | ${board[5] || '5'}`);
        console.log('---------');
        console.log(`${board[6] || '6'} | ${board[7] || '7'} | ${board[8] || '8'}`);
        console.log('------------------\n');
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
        isFull
    };
})();
