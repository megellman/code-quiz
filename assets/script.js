var container = document.querySelector("#quiz-container");
var btns = document.querySelectorAll(".questions");
var question = document.querySelector("#questions");
var quizStart = document.querySelector("#btn-start");
var quesOne = document.querySelector("#ques-one");
var quesTwo = document.querySelector("#ques-two");
var quesThree = document.querySelector("#ques-three");
var quesFour = document.querySelector("#ques-four");
var quesNum = document.querySelector("#ques-num");
var answerMessage = document.querySelector("#answer-message");
var correctMessage = document.querySelector("#correct");
var wrongMessage = document.querySelector("#wrong");
var finalScoreMessage = document.querySelector("#final-score");
var scorePercentage = document.querySelector("#score-percentage");
var roundCounter = 0;
var finalScore = 0;
var time = 60;

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

quesOne.onclick = function(){
    if(this.textContent === "1. function myFunction()"){
        rightAnswer();
        setTimeout(cancelMessage, 1000);
        finalScore++;
        setTimeout(nextRound, 1000);
    } else{
        wrongAnswer();
        setTimeout(cancelMessage, 1000);
        setTimeout(nextRound, 1000);
    }
}

quesTwo.onclick = function(){
    if(this.textContent === "correct answer"){
        finalScore++;
        setTimeout(nextRound, 1000);
    } else{
        wrongAnswer();
        setTimeout(cancelMessage, 1000);
        setTimeout(nextRound, 1000);
    }
}

quesThree.onclick = function(){
    if(this.textContent === "3. If a is true, log 'Hello World' to the console" || this.textContent === "3. == declares that two values are equal and === declares that two values are the same primitive type and equal value"){
        rightAnswer();
        setTimeout(cancelMessage, 1000);
        finalScore++;
        setTimeout(nextRound, 1000);
    } else{
        wrongAnswer();
        setTimeout(cancelMessage, 1000);
        setTimeout(nextRound, 1000);
    }
}

quesFour.onclick = function(){
    if(this.textContent === "4. <script></script>"){
        rightAnswer();
        setTimeout(cancelMessage, 1000);
        finalScore++;
        setTimeout(nextRound, 1000);
    } else{
        wrongAnswer();
        setTimeout(cancelMessage, 1000);
        setTimeout(nextRound, 1000);
    }
}



// Begin Game 
quizStart.addEventListener("click", roundOne);

// 
function roundOne(){
    for(var i = 0; i < btns.length; i++){
        btns[i].style.visibility = "visible";
    }
    quesOne.textContent = "1. function myFunction()";
    quesTwo.textContent = "2. myFunction";
    quesThree.textContent = "3. myFunction()";
    quesFour.textContent = "4. function myFunction";
    quizStart.style.display = "none";
    quesNum.style.visibility = "visible";
    quesNum.textContent = "Question #1";
    question.style.visibility = "visible";
    question.textContent = "How do you declare a function?";
    roundCounter++;
    countDown();
}

function roundTwo(){
    quesOne.textContent = "1. <link></link>";
    quesTwo.textContent = "2. <a/>";
    quesThree.textContent = "3. <script/>";
    quesFour.textContent = "4. <script></script>";
    quesNum.textContent = "Question #2";
    question.textContent = "How do you insert JavaScript code in an HTML file?"
    roundCounter++;
}

function roundThree(){
    quesOne.textContent = "1. If a is selected, log 'Hello World' to the console";
    quesTwo.textContent = "2. If a is passed, run this function";
    quesThree.textContent = "3. If a is true, log 'Hello World' to the console";
    quesFour.textContent = "4. If a is found in the HTML file, log 'Hello World' to the console";
    quesNum.textContent = "Question #3";
    question.textContent = "Describe the function of this code: if(a){\nconsole.log('Hello World')";
    roundCounter++;
}

function roundFour(){
    quesOne.textContent = "1. == is truthy and === is not";
    quesTwo.textContent = "2. == asigns a value and === declares that two values are equal";
    quesThree.textContent = "3. == declares that two values are equal and === declares that two values are the same primitive type and equal value";
    quesFour.textContent = "4. === declares that two values are equal and == declares that two values are the same primitive type and equal value";
    quesNum.textContent = "Question #4";
    question.textContent = "What is the difference between == and ===?"
    roundCounter++;
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
}

//Wrong
function wrongAnswer(){
    answerMessage.style.display = "block";
    wrongMessage.style.display = "block";
}

function cancelMessage(){
    answerMessage.style.display = "none";
    wrongMessage.style.display = "none";
    correctMessage.style.display = "none";
}

// Final Score
function calculateScore(){
    roundCounter++;
    finalScoreMessage.style.display = "block";
    var scoreTotal = (finalScore / 4) * 100;
    scorePercentage.textContent = "Your Score: " + scoreTotal + "%";
}