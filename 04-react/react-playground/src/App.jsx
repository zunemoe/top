import './App.css'
import IntroScene from './components/IntroScene.jsx'
import { useGameState } from './hooks/useGameState.js';

function App() {
  const {
    selectedDifficulty,
    gameState,
    handleDifficultyChange,   
    handleGameStart,
  } = useGameState();

  return (
    <>
      <IntroScene 
        selectedDifficulty={selectedDifficulty}
        gameState={gameState}
        handleDifficultyChange={handleDifficultyChange}   
        handleStartGame={handleGameStart}
      />
    </>
  )
}

export default App
