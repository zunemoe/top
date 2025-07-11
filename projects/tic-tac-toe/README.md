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
- [x] **Player Factory Function** (`player.js`)
  - [x] Create player objects with name and marker (X/O)
  - [x] Player state management

- [x] **Game Board Module** (`board.js`)
  - [x] Create 3x3 game board array
  - [x] Add markers to board positions
  - [x] Check for valid moves
  - [x] Reset board functionality
  - [x] Display board in console

- [x] **Game Controller** (`game.js`)
  - [x] Initialize game state
  - [x] Handle player turns
  - [x] Check for win conditions (rows, columns, diagonals)
  - [x] Check for tie conditions
  - [x] Game flow control (start, restart, end)
  - [x] Console-based user input/output

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