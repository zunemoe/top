import Button from "./Button";
import OptionButton from "./OptionButton";
import { DIFFICULTY_LEVELS, GAME_STATES } from '../utils/constants';

const IntroScene = ({
    selectedDifficulty,
    gameState,
    handleDifficultyChange,   
    handleStartGame,
}) => {
    return (
        <>
            <h1>Welcome to the Intro Scene</h1>
            <p>{selectedDifficulty} is selected. Game is {gameState}.</p>
            <div className="options">
                <OptionButton title={DIFFICULTY_LEVELS.EASY} onClickEvent={() => handleDifficultyChange(DIFFICULTY_LEVELS.EASY)}/>
                <OptionButton title={DIFFICULTY_LEVELS.MEDIUM} onClickEvent={() => handleDifficultyChange(DIFFICULTY_LEVELS.MEDIUM)} />
                <OptionButton title={DIFFICULTY_LEVELS.HARD} onClickEvent={() => handleDifficultyChange(DIFFICULTY_LEVELS.HARD)} />
            </div>
            <Button title={gameState === GAME_STATES.PLAYING ? "Stop Game" : "Start Game"} onClickEvent={() => handleStartGame()} />
        </>
    );
};

export default IntroScene;