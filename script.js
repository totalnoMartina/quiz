
// defining username

let userName = document.querySelector('#username');
let getName = document.querySelector('#ask-name');
let greetingInput = document.querySelector('#greeting-input');
let quizArea = document.querySelector('#quiz-area');
let answerA = document.querySelector('#answerA');
let answerB = document.querySelector('#answerB');
let answerC = document.querySelector('#answerC');
let answerD = document.querySelector('#answerD');

quizArea.style.display = 'none';

function greeting() {
    getName.innerHTML = "";
    getName.innerHTML = "Hello " + userName.value + ' thanks for coming by!';
    greetingInput.style.display = 'none';
    quizArea.style.display = 'block';
}


