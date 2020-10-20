const quizContainner = document.querySelector('.quiz');
const resultsContainer = document.querySelector('.result');
const submitButton = document.querySelector('.submit');

const CLICK_EVENT = 'click'

const data = [
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


function buildQuiz() {
    const output = [];

    data.forEach((currentQuestion, questionNumber) => {

        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                <input type = "radio" name= "question${questionNumber}"
                value="${letter} "> ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class ="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );

    }
    );
    quizContainner.innerHTML = output.join('');
}
function showResult() {
    const answerContainers = quizContainner.querySelectorAll('.answers');
    let numCorrect = 0;
    data.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = 'red';
        }
        else {
            answerContainers[questionNumber].style.color = 'blue';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener(CLICK_EVENT, showResult);

