//HTML ELEMENTS 
const statusDiv = document.querySelector('.status');
const restDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

//game constants 
const xSymbol = 'x';
const oSymbol = 'o';

//game variables
let gameIsLive = true;
let xIsNext = true;



const handleCellClick = (e) => {
    const classList = e.target.classList;

    if (xIsNext) {
        // classList.add('x');
    } else {
        // classList.add('o');
    }

}
for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick)
}