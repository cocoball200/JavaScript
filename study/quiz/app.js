const wholeContainer = document.querySelector('.container__whole');
const startButton = document.querySelector('.start__button');
const submitButton = document.querySelector('.submit__button');
const nextButton = document.querySelector('.next__button');
const questionTitle = document.querySelector('.title__text');
const codeTEXT = document.querySelector('.code__text');
const choiceDIv = document.querySelector('.container__choice');
const choiceText = document.querySelector('.choice__text'); //list
const CLICK_EVENT = "click";
const HIDDEN = "hidden";

const loadedData = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    }
];

var submitedAnswer = 99;
var count = 0;

function showChoices(lengths, choiceData) {
    var divList = [];
    for (let choiceIndex = 0; choiceIndex < lengths; choiceIndex++) {
        var div = document.createElement("div");
        div.classList.add("choice__text");
        div.textContent = choiceData[choiceIndex];
        div.setAttribute("data-index", choiceIndex);
        divList.push(choiceDIv.appendChild(div));

    }
    return divList;
}

function handlerChoiceClick(event) {
    if (!null) {
        var userChoice = event.target;
        submitedAnswer = parseInt(userChoice.getAttribute('data-index'), 4);
    }
}

function showQuestion() {
    for (var index in loadedData) {
        console.log(count);
        questionTitle.textContent = loadedData[index].question;
        if (!null) {
            codeTEXT.textContent = loadedData[index].code;
        } //if
        showChoices(loadedData[index].choices.length, loadedData[index].choices);
        console.log(index);
        choiceDIv.addEventListener(CLICK_EVENT, handlerChoiceClick);
        submitButton.addEventListener(CLICK_EVENT, function () {
            var correctAnswer = loadedData[index].correctAnswer;
            console.log(correctAnswer, submitedAnswer);
            console.log(submitedAnswer === correctAnswer);
            if (submitedAnswer === correctAnswer) {
                submitButton.setAttribute(HIDDEN, "");
                nextButton.removeAttribute(HIDDEN);
            }
        }); //addevent
        nextButton.addEventListener(CLICK_EVENT, function () {
        })
    }//for
}//function

function startGame() {
    wholeContainer.removeAttribute(HIDDEN);
    startButton.setAttribute(HIDDEN, "");
    submitButton.removeAttribute(HIDDEN;
    showQuestion();
}

function init() {
    wholeContainer.setAttribute(HIDDEN, "");
    submitButton.setAttribute(HIDDEN, "");
    nextButton.setAttribute(HIDDEN, "");
    startButton.removeAttribute(HIDDEN)
    startButton.addEventListener(CLICK_EVENT, startGame);
}

init();