var container = $('#quiz-container');
var btns = $('.questions');
var question = $('#questions');
var quizStart = $('#btn-start');
var quesNum = $('#ques-num');
var answerMessage = $('#answer-message');
var finalScoreMessage = $('#final-score');
var scorePercentage = $('#score-percentage');
var scoreBoard = $('#score-board');
var scoreInfo = $('#score-info');
var roundCounter = 0;
var finalScore = 0;
var time = 30;
var answerKey = [];


// Begin Game 
quizStart.on('click', roundOne);

// Countdown timer
function countDown() {
    var timer = setInterval(function () {
        $('#timer').text(time);
        time--;
        if (time < 0) {
            clearInterval(timer);
            calculateScore()
        } 
    }, 1000);
}

var quesOne = ["1. function myFunction()", "2. myFunction", "3. myFunction()", "4. function myFunction"]
answerKey.push(quesOne[0]);
function roundOne() {
    for (var i = 0; i < btns.length; i++) {
        btns[i].style.visibility = "visible";
        btns[i].textContent = quesOne[i];
    }
    quizStart.css('display', 'none');
    quesNum.css('visibility', 'visible').text("Question #1");
    question.css('visibility', 'visible').text("How do you declare a function?");
    roundCounter++;
    countDown();
}

var quesTwo = ["1. <link></link>", "2. <a/>", "3. <script/>", "4. <script></script>"]
answerKey.push(quesTwo[3]);
function roundTwo() {
    for (var i = 0; i < btns.length; i++) {
        btns[i].textContent = quesTwo[i];
    }
    quesNum.text('Question #2');
    question.text('How do you insert JavaScript code in an HTML file?');
    roundCounter++;
}

var quesThree = ["1. If a is selected, log 'Hello World' to the console", "2. If a is passed, run this function", "3. If a is true, log 'Hello World' to the console", "4. If a is found in the HTML file, log 'Hello World' to the console"]
answerKey.push(quesThree[2]);
function roundThree() {
    for (var i = 0; i < btns.length; i++) {
        btns[i].textContent = quesThree[i];
    }
    quesNum.text('Question #3');
    question.text('Describe the function of this code:\n if(a){\nconsole.log(\'Hello World\')');
    roundCounter++;
}

var quesFour = ["1. == is truthy and === is not", "2. == asigns a value and === declares that two values are equal", "3. == declares that two values are equal and === declares that two values are the same primitive type and equal value", "4. === declares that two values are equal and == declares that two values are the same primitive type and equal value"]
answerKey.push(quesFour[2]);
function roundFour() {
    for (var i = 0; i < btns.length; i++) {
        btns.textContent = quesFour[i];
    }
    quesNum.text('Question #4');
    question.text('What is the difference between == and ===?');
    roundCounter++;
}

// If the content of the button clicked has text content that matches one of these array
// items, run rightAnswer function. If not, run wrongAnswer function
function checkAnswer(e) {
    if (answerKey.includes(btns[e].textContent)) {
        rightAnswer();
    } else {
        wrongAnswer();
    }
}

// Next Round 
function nextRound() {
    if (roundCounter === 1) {
        roundTwo();
    } else if (roundCounter === 2) {
        roundThree();
    } else if (roundCounter === 3) {
        roundFour();
    } else if (roundCounter === 4) {
        calculateScore();
    }
}

//Correct
function rightAnswer() {
    answerMessage.css('display', 'block');
    answerMessage.children().first().css('display', 'block');
    setTimeout(cancelMessage, 1000);
    finalScore++;
    setTimeout(nextRound, 1000);
}

//Wrong
function wrongAnswer() {
    answerMessage.css('display', 'block');
    answerMessage.children().last().css('display', 'block');
    setTimeout(cancelMessage, 1000);
    setTimeout(nextRound, 1000);
    time--;
}

function cancelMessage() {
    answerMessage.css('display', 'none');
    answerMessage.children().css('display', 'none');
}

// Final Score
var scoreTotal;
function calculateScore() {
    roundCounter++;
    finalScoreMessage.css('display', 'block');
    scoreTotal = (finalScore / 4) * 100;
    scorePercentage.textContent = "Your Score: " + scoreTotal + "%";
}

//form entry and make sure to prevent default()
var scoreContainer = $('score-container');
function getHighScore(form) {
    finalScoreMessage.css('display', 'none');
    var entry = $('<p>');
    var name = `${scoreTotal}    -   ${form.initials.value}`;
    entry.appendChild(document.createTextNode(name));
    scoreContainer.appendChild(entry);
    scoreInfo.style.display = "block";
    form.reset();
}

function playAgain() {
    scoreInfo.css('display', 'none');
    time = 30;
    roundCounter = 0;
    finalScore = 0;
    roundOne();
}

// clear function
function clearScore() {
    while (scoreContainer.hasChildNodes()) {
        scoreContainer.removeChild(scoreContainer.firstChild);
    }
}
