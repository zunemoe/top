# Tic Tac Toe Game

A classic Tic Tac Toe game implementation using vanilla JavaScript, HTML, and CSS.

## Project Structure

```
tic-tac-toe/
├── scripts/
│   ├── game.js          # Main game controller (IIFE pattern)
│   ├── board.js         # Game board logic
│   └── player.js        # Player factory function
├── styles/
│   └── style.css        # Game styling
├── index.html           # Main HTML file
└── README.md           # This file
```

## Implementation Plan

### Phase 1: Console Version (Game Logic)
- [ ] **Player Factory Function** (`player.js`)
  - [ ] Create player objects with name and marker (X/O)
  - [ ] Player state management

- [ ] **Game Board Module** (`board.js`)
  - [ ] Create 3x3 game board array
  - [ ] Add markers to board positions
  - [ ] Check for valid moves
  - [ ] Reset board functionality
  - [ ] Display board in console

- [ ] **Game Controller** (`game.js`)
  - [ ] Initialize game state
  - [ ] Handle player turns
  - [ ] Check for win conditions (rows, columns, diagonals)
  - [ ] Check for tie conditions
  - [ ] Game flow control (start, restart, end)
  - [ ] Console-based user input/output

### Phase 2: Web Interface (DOM Manipulation)
- [ ] **HTML Structure** (`index.html`)
  - [ ] Create game board grid
  - [ ] Add player info display
  - [ ] Add game controls (start, restart buttons)
  - [ ] Add game status display

- [ ] **CSS Styling** (`style.css`)
  - [ ] Style game board grid
  - [ ] Style player markers
  - [ ] Style game controls
  - [ ] Add responsive design
  - [ ] Add hover effects and animations

- [ ] **DOM Integration** (update `game.js`)
  - [ ] Handle click events on board cells
  - [ ] Update visual board display
  - [ ] Show current player turn
  - [ ] Display game results
  - [ ] Handle game restart

### Phase 3: Enhancements (Optional)
- [ ] **Game Features**
  - [ ] Score tracking
  - [ ] Player name input
  - [ ] Game history
  - [ ] Sound effects
  - [ ] AI opponent (simple/advanced)

- [ ] **Visual Enhancements**
  - [ ] Smooth animations
  - [ ] Win line highlighting
  - [ ] Theme selection
  - [ ] Mobile optimization

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Start playing!

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- IIFE (Immediately Invoked Function Expression) pattern
- Factory Function pattern