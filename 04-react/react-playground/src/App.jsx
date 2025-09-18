import './App.css'
import IntroScene from './components/IntroScene.jsx'
import GameBoard from './components/GameBoard.jsx'
import { useGameState } from './hooks/useGameState.js';
import { GAME_STATES, DIFFICULTY_LEVELS } from './utils/constants.js';

function App() {
  const {
    selectedDifficulty,
    gameState,
    handleDifficultyChange,   
    handleGameStart,
  } = useGameState();

  const renderCurrentScreen = () => {
    if (gameState === GAME_STATES.NOT_PLAYING) {
        return (
            <IntroScene
                selectedDifficulty={selectedDifficulty}
                gameState={gameState}
                handleDifficultyChange={handleDifficultyChange}
                handleStartGame={handleGameStart}
            />
        );        
      } else if (gameState === GAME_STATES.PLAYING) {
        return (
            <GameBoard
                selectedDifficulty={selectedDifficulty}
                gameState={gameState}
                handleStartGame={handleGameStart}
            />
        );
      }
  };

  return (
    <>
        {renderCurrentScreen()}
    </>
  );
}

export default App
