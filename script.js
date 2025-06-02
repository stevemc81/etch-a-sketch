const container = document.querySelector('.container');

for (let i = 0; i < (16 * 16); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        square.classList.add('hovered');
    })
    container.appendChild(square);
}

function createGrid(gridSize) {
    container.innerHTML = '';

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${320 / gridSize}px`;
        square.style.height = `${320 / gridSize}px`;
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        })
        container.appendChild(square);
    }
}

// Get a grid size from user
const gridSizeBtn = document.querySelector('#grid-size-btn');

gridSizeBtn.addEventListener('click', () => {
    const gridSize = parseInt(prompt('Enter a grid size from 16 to 100'));

    if (gridSize < 16 || gridSize > 100) {
        alert('Grid must be between 16 and 100!');
    } else {
        createGrid(gridSize)
    }
});