import { useState } from 'react'
import { DIFFICULTY_LEVELS, GAME_STATES } from '../utils/constants';

export const useGameState = () => {
    const [gameState, setGameState] = useState(GAME_STATES.NOT_PLAYING);
    const [selectedDifficulty, setSelectedDifficulty] = useState(DIFFICULTY_LEVELS.MEDIUM);

    const handleDifficultyChange = (difficulty) => {
        setSelectedDifficulty(difficulty);
    };

    const handleGameStart = () => {
        setGameState(prevState => 
            prevState === GAME_STATES.PLAYING ? GAME_STATES.NOT_PLAYING : GAME_STATES.PLAYING);
    };

    return {
        selectedDifficulty,
        gameState,

        handleDifficultyChange,   
        handleGameStart,     
    };
};