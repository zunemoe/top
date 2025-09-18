import { GAME_STATES } from '../utils/constants';
import Button from "./Button";

const GameBoard = ({
    selectedDifficulty,
    gameState,
    handleStartGame,
}) => {
    return (
        <>
            <p>{selectedDifficulty} is selected. Game is {gameState}.</p>
            <Button title={gameState === GAME_STATES.PLAYING ? "Stop Game" : "Start Game"} onClickEvent={() => handleStartGame()} />           
        </>
    );
};

export default GameBoard;