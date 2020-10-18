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
let gameIsLive = true;
let xIsNext = true;
let scoreArray = [];

function handleScore(clickTarget, targetIndex) {
    scoreArray[targetIndex] = player;
    clickTarget.textContent = player;
    player = player == xSymbol ? oSymbol : xSymbol;
}

function startGame(event) {
    var clickTarget = event.target;
    var targetIndex = parseInt(clickTarget.getAttribute('index'));
    handleScore(clickTarget, targetIndex);
}

gameGridDivs.addEventListener(CLICK_EVENT, startGame);


