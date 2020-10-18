//HTML ELEMENTS 
const statusDiv = document.querySelector('.status');
const restDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');
const gameGridDivs = document.querySelector('.game-grid');

//game constants 
const xSymbol = 'X';
const oSymbol = 'O';
const CLICK_EVENT = 'click';

//game variables
let player = xSymbol;
let scoreArray = [];
let winner = '';

function identifyWinner(scoreArray) {
    const scoringData = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < scoringData.length; i++) {
        const [a, b, c] = scoringData[i];

        if (scoreArray[a] && scoreArray[a] === scoreArray[b] && scoreArray[a] === scoreArray[c]) {
            return scoreArray[a];
        }
    }

    return null;
}

function notiWinner(player) {
    alert(`YEAH! Winner is ${player == xSymbol ? oSymbol : xSymbol}`);
    resetGame();
}

function handleCellScore(clickTarget, targetIndex) {
    scoreArray[targetIndex] = player;
    clickTarget.textContent = player;
    player = player == xSymbol ? oSymbol : xSymbol;
    statusDiv.textContent = `This is ${player} turn `;
    winner = identifyWinner(scoreArray);
    if (!winner) return
    notiWinner(player);
}

function startGame(event) {
    var clickTarget = event.target;
    var targetIndex = parseInt(clickTarget.getAttribute('index'));
    handleCellScore(clickTarget, targetIndex);
}
function resetGame(event) {
    scoreArray.fill(null, 0);
    cellDivs.forEach(item => item.textContent = '');
}

gameGridDivs.addEventListener(CLICK_EVENT, startGame);
restDiv.addEventListener(CLICK_EVENT, resetGame);


