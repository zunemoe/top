let containerDiv = document.querySelector(".container");
let gridContainer = document.querySelector(".grid-container");
let gridColumn = 16; // Default grid size
let gridRow = 16; // Default grid size
let gridSize = gridColumn * gridRow; // Total number of grid items

const gridButton = document.createElement("button");
gridButton.textContent = "Change Grid Size";
gridButton.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size. (e.g., 16 for 16x16 grid)");
    if (newSize && !isNaN(newSize) && newSize > 0) {
        gridColumn = parseInt(newSize);
        gridRow = parseInt(newSize);
        gridSize = gridColumn * gridRow;

        // Update the grid container-grid css size (40 x newSize) + newSize
        let newGridContainerSize = 40 * gridColumn + gridColumn -1;
        gridContainer.style.width = `${newGridContainerSize}px`;
        gridContainer.style.height = `${newGridContainerSize}px`;

        // Create the grid with the new size
        createGrid();
    } else {
        alert("Please enter a valid number greater than 0.");
    }
})
containerDiv.insertBefore(gridButton, gridContainer);

// Function to create the grid
function createGrid() {
    gridContainer.innerHTML = "";
    for (let i=0; i < gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        
        const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
        gridItem.style.backgroundColor = getPastelColor();
        gridContainer.appendChild(gridItem);
    }
}

createGrid();

function getSubtleRandomColor() {
    // Fixed hue range for similar colors (e.g., blues: 200-250)
    const hue = 200 + Math.random() * 50;
    
    // Subtle saturation and lightness variations
    const saturation = 60 + Math.random() * 30; // 60-90%
    const lightness = 50 + Math.random() * 30;  // 50-80%
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function getPastelColor() {
    const hue = Math.random() * 360;
    const saturation = 40 + Math.random() * 30; // 40-70% for pastel
    const lightness = 70 + Math.random() * 20;  // 70-90% for light colors
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}