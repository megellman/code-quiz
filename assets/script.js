var container = document.querySelector("#quiz-container");
var btns = document.getElementsByClassName("questions");
var question = document.querySelector("#questions");
var quizStart = document.querySelector("#btn-start");
var quesNum = document.querySelector("#ques-num");
var answerMessage = document.querySelector("#answer-message");
var correctMessage = document.querySelector("#correct");
var wrongMessage = document.querySelector("#wrong");
var finalScoreMessage = document.querySelector("#final-score");
var scorePercentage = document.querySelector("#score-percentage");
var scoreBoard = document.querySelector("#score-board");
var roundCounter = 0;
var finalScore = 0;
var time = 30;
var answerKey = [];


// Begin Game 
quizStart.addEventListener("click", roundOne);

// Countdown timer
function countDown(){
    var timer = setInterval(function(){
        document.querySelector("#timer").innerHTML = time;
        time--;
        if(time < 0){
            clearInterval(timer);
            calculateScore()
        } else if(roundCounter === 5){
            clearInterval(timer);
            document.querySelector("#timer").innerHTML = 0;
        }
    }, 1000);
}

var quesOne = ["1. function myFunction()", "2. myFunction", "3. myFunction()", "4. function myFunction"]
answerKey.push(quesOne[0]);
function roundOne(){
    for(var i = 0; i < btns.length; i++){
        btns[i].style.visibility = "visible";
        btns[i].textContent = quesOne[i];
    }
    quizStart.style.display = "none";
    quesNum.style.visibility = "visible";
    quesNum.textContent = "Question #1";
    question.style.visibility = "visible";
    question.textContent = "How do you declare a function?";
    roundCounter++;
    countDown();
}

var quesTwo = ["1. <link></link>", "2. <a/>", "3. <script/>", "4. <script></script>"]
answerKey.push(quesTwo[3]);
function roundTwo(){
    for(var i = 0; i < btns.length; i++){
        btns[i].textContent = quesTwo[i];
    }
    quesNum.textContent = "Question #2";
    question.textContent = "How do you insert JavaScript code in an HTML file?"
    roundCounter++;
}

var quesThree = ["1. If a is selected, log 'Hello World' to the console", "2. If a is passed, run this function", "3. If a is true, log 'Hello World' to the console", "4. If a is found in the HTML file, log 'Hello World' to the console"]
answerKey.push(quesThree[2]);
function roundThree(){
    for(var i = 0; i < btns.length; i++){
        btns[i].textContent = quesThree[i];
    }
    quesNum.textContent = "Question #3";
    question.textContent = "Describe the function of this code:\n if(a){\nconsole.log('Hello World')";
    roundCounter++;
}

var quesFour = ["1. == is truthy and === is not", "2. == asigns a value and === declares that two values are equal", "3. == declares that two values are equal and === declares that two values are the same primitive type and equal value", "4. === declares that two values are equal and == declares that two values are the same primitive type and equal value"]
answerKey.push(quesFour[2]);
function roundFour(){
    for(var i = 0; i < btns.length; i++){
        btns.textContent = quesFour[i];
    }
    quesNum.textContent = "Question #4";
    question.textContent = "What is the difference between == and ===?"
    roundCounter++;
}

// If the content of the button clicked has text content that matches one of these array
// items, run rightAnswer function. If not, run wrongAnswer function
function checkAnswer(e){
    if(answerKey.includes(btns[e].textContent)){
        rightAnswer();
    } else {
        wrongAnswer();
    }
}

// Next Round 
function nextRound(){
    if(roundCounter === 1){
        roundTwo();
    } else if(roundCounter === 2){
        roundThree();
    } else if(roundCounter === 3){
        roundFour();
    } else if(roundCounter === 4){
        calculateScore();
    }
}

//Correct
function rightAnswer(){
    answerMessage.style.display = "block";
    correctMessage.style.display = "block";
    setTimeout(cancelMessage, 1000);
    finalScore++;
    setTimeout(nextRound, 1000);
}

//Wrong
function wrongAnswer(){
    answerMessage.style.display = "block";
    wrongMessage.style.display = "block";
    setTimeout(cancelMessage, 1000);
    setTimeout(nextRound, 1000);
    time--;
}

function cancelMessage(){
    answerMessage.style.display = "none";
    wrongMessage.style.display = "none";
    correctMessage.style.display = "none";
}

var scoreTotal;

// Final Score
function calculateScore(){
    roundCounter++;
    finalScoreMessage.style.display = "block";
    scoreTotal = (finalScore / 4) * 100;
    scorePercentage.textContent = "Your Score: " + scoreTotal + "%";
}

function getHighScore(form) {
    finalScoreMessage.style.display = "none";
    var entry = document.createElement("p");
    var name = `${scoreTotal}   ${form.initials.value}` ;
    entry.appendChild(document.createTextNode(name));
    scoreBoard.appendChild(entry);
    document.getElementById("score-info").style.display = "block";
    form.reset();
}

function playAgain(){
    document.getElementById("score-info").style.display = "none";
    time = 30;
    roundCounter = 0;
    finalScore = 0;
    roundOne();
}

function clearScore(){
    var first = scoreBoard.firstElementChild;
    while (first) {
        first.remove();
        first = scoreBoard.firstElementChild;
    }
}