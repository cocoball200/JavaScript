//HTML ELEMENTS 
const statusDiv = document.querySelector('.status');
const restDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

//game constants 
const xSymbol = 'X';
const oSymbol = 'O';
let player = xSymbol;

//game variables
let gameIsLive = true;
let xIsNext = true;
let scoreArray = [];

function addScore(clickTarget, targetIndex) {
    scoreArray[targetIndex] = player;
    clickTarget.innerHTML = player;
    player = player == xSymbol ? oSymbol : xSymbol;


}

function startGame(event) {
    var clickTarget = event.target;
    var targetIndex = parseInt(clickTarget.getAttribute('index'));
    addScore(clickTarget, targetIndex);
}

function makingClassName() {
    cellDivs.forEach(function (item, index) {
        item.addEventListener("click", startGame);

    })


}

function init() {

    makingClassName();


}

init();