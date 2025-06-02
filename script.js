const container = document.querySelector('.container');

createGrid(16);

// for (let i = 0; i < (16 * 16); i++) {
//     const square = document.createElement('div');
//     square.classList.add('square');
//     square.addEventListener('mouseover', () => {
//         square.classList.add('hovered');
//     })
//     container.appendChild(square);
// }

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256); // 0-255
    const g = Math.floor(Math.random() * 256); // 0-255
    const b = Math.floor(Math.random() * 256); // 0-255
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(gridSize) {
    container.innerHTML = '';

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${320 / gridSize}px`;
        square.style.height = `${320 / gridSize}px`;
        square.addEventListener('mouseover', () => {
            const randomColoursCheckbox = document.querySelector('#random-colours-checkbox');
            console.log(randomColoursCheckbox);
            if (randomColoursCheckbox.checked) {
                const color = getRandomRgbColor();
                square.style.backgroundColor = color;
            } else {
                square.classList.add('hovered');
            }
        })
        container.appendChild(square);
    }
}

const gridSizeBtn = document.querySelector('#grid-size-btn');

gridSizeBtn.addEventListener('click', () => {
    const gridSize = parseInt(prompt('Enter a grid size from 16 to 100'));

    if (gridSize < 16 || gridSize > 100) {
        alert('Grid must be between 16 and 100!');
    } else {
        createGrid(gridSize)
    }
});

const resetBtn = document.querySelector('#reset-btn');

resetBtn.addEventListener('click', () => {
    container.innerHTML = '';
    createGrid(16);
})