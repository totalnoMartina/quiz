
// defining username

let userName = document.querySelector('#username');
let getName = document.querySelector('#ask-name');
let greetingInput = document.querySelector('#greeting-input');
let quizArea = document.querySelector('#quiz-area');
let question = document.querySelector('#question');
let answerA = document.querySelector('#answerA');
let answerB = document.querySelector('#answerB');
let answerC = document.querySelector('#answerC');
let answerD = document.querySelector('#answerD');
let submitFirst = document.querySelector('#first-q-submit');
let submitSecond = document.querySelector('#second-q-submit');
let submitThird = document.querySelector('#third-q-submit');
let submitFourth = document.querySelector('#fourth-q-submit');
let correctAnswer = '';
let score = 0;
let arrayIteration = 0;



let questionArray = [
    "Q1 : What benefits do you get in eating half avocado a day?",
    "Q2 : Which vegetable you can only eat raw, never cooked?",
    "Q3 : Which vegetable was considered an aphrodisiac back in the Roman times?",
    "Q4 : Which one of these is not true?"
 ]

 let answerArrayA = [
    'All of the above',
    'Tomato',
    'Chickpeas',
    'Tomatoes are in France refered to as "The apple of love".'
 ]

 let answerArrayB = [
    'Keeps eyes healthy due to high amount of vitamin E',
    'Cucumber',
    'Broccolli',
    'Carrots are made up of 85%-90% water.'
 ]

 let answerArrayC = [
    'Aids weigh-loss',
    'Kale',
    'Beetroot',
    'Germans eat twice as much potatoes as Americans.'
 ]

 let answerArrayD = [
    'Helps manage cholesterol',
    'Carrot',
    'Potato',
    'The first documented carrot was orange in color'
 ]

quizArea.style.display = 'none';
submitFirst.style.display = 'none';
submitSecond.style.display = 'none';
submitThird.style.display = 'none';
submitFourth.style.display = 'none';

function reset() {
    answerA.style.color = "white";
    answerB.style.color = "white";
    answerC.style.color = "white";
    answerD.style.color = "white";

    question.innerHTML = questionArray[arrayIteration];
    answerA.innerHTML = answerArrayA[arrayIteration];
    answerB.innerHTML = answerArrayB[arrayIteration];
    answerC.innerHTML = answerArrayC[arrayIteration];
    answerD.innerHTML = answerArrayD[arrayIteration];
}

function greeting() {
    greetingInput.style.display = 'none';
    quizArea.style.display = 'block';
    getName.innerHTML = '';
    getName.innerHTML = 'Hello ' + userName.value + ' thanks for coming by!';
    reset()
    submitFirst.style.display = 'block';
    
};



function respondA() {
    answerA.style.color = "red";
    answerB.style.color = "white";
    answerC.style.color = "white";
    answerD.style.color = "white";
    correctAnswer = "answerA";
}

function respondB() {
    answerA.style.color = "white";
    answerB.style.color = "red";
    answerC.style.color = "white";
    answerD.style.color = "white";
    correctAnswer = "answerB";
}

function respondC() {
    answerA.style.color = "white";
    answerB.style.color = "white";
    answerC.style.color = "red";
    answerD.style.color = "white";
    correctAnswer = "answerC";

}

function respondD() {
    answerA.style.color = "white";
    answerB.style.color = "white";
    answerC.style.color = "white";
    answerD.style.color = "red";
    correctAnswer = "answerD";
}

function submitAnswer1() {
    if (correctAnswer == 'answerA') {
        score += 1;
    }
    submitFirst.style.display = 'none';
    submitSecond.style.display = 'block';
    arrayIteration += 1;
    reset();
}

function submitAnswer2() {
    if (correctAnswer == 'answerB') {
        score += 1;
    }
    arrayIteration += 1;
    quizArea.style.display = 'block';
    submitSecond.style.display = 'none';
    submitThird.style.display = 'block';
    reset();
}

function submitAnswer3() {
    if (correctAnswer == 'answerC') {
        score += 1;
    }
    arrayIteration += 1;
    quizArea.style.display = 'block';
    submitThird.style.display = 'none';
    submitFourth.style.display = 'block';
    reset();
}

function submitAnswer4() {
    if (correctAnswer == 'answerD') {
        score += 1;
    }
    arrayIteration += 1;
    getName.innerHTML = 'Well done! ' + userName.value + ' Your score is ' + score;
    quizArea.style.display = 'none';
    
}