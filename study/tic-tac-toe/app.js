function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

const startButton = document.querySelector('.start__button');
const restartButton = document.querySelector('.restart__button');
const bordDiv = document.querySelector('.board');
const bordElement = document.querySelectorAll('.board__cell');
const CLICK_EVENT = 'click';

let saveScore = Array(9).fill(null);
let clickedPartDiv;
let currentPlayer = 'X';

function handleCellClick(event) {
    clickedPartDiv = event.target;
    let index = parseInt(clickedPartDiv.getAttribute('data-index'), 9);
    if (saveScore[index]) return;
    saveScore[index] = currentPlayer;
    clickedPartDiv.textContent = currentPlayer;

    let winner = calculateWinner(saveScore);
    if (winner) {
        alert(`${currentPlayer} is winner`);
        bordDiv.removeEventListener(CLICK_EVENT, handleCellClick);
        restartButton.addEventListener(CLICK_EVENT, init);
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function startGame() {
    bordDiv.style.display = 'grid';
    startButton.style.display = 'none';
    restartButton.style.display = 'block';
    bordDiv.addEventListener(CLICK_EVENT, handleCellClick);
}

function init() {
    bordElement.forEach(elment => elment.textContent = "");
    restartButton.removeEventListener(CLICK_EVENT, init);
    saveScore = Array(9).fill(null);
    bordDiv.style.display = 'none';
    startButton.style.display = 'block';
    restartButton.style.display = 'none';
    startButton.addEventListener(CLICK_EVENT, startGame);
}

init();

restartButton.addEventListener(CLICK_EVENT, init);
