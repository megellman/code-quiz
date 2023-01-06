var container = $('#quiz-container');
var btns = $('.quesbtn');
var question = $('#question');
var quizStart = $('#btn-start');
var quesNum = $('#ques-num');
var answerMessage = $('#answer-message');
var finalScoreMessage = $('#final-score');
var scorePercentage = $('#score-percentage');
var scoreBoard = $('#score-board');
var scoreInfo = $('#score-info');
var submitBtn = $('#submit-btn');
var roundCounter = 0;
var finalScore = 0;
var time = 30;

var answerKey = [
    {
        number: "Question #1",
        question: "How do you declare a function?",
        options: [{
            text: "1. function myFunction()",
            value: true,
        }, {
            text: "2. myFunction",
            value: false,
        }, {
            text: "3. myFunction()",
            value: false,
        }, {
            text: "4. function myFunction",
            value: false,
        }],
    },
    {
        number: "Question #2",
        question: "How do you insert JavaScript code in an HTML file?",
        options: [{
            text: "1. <link></link>",
            value: false,
        }, {
            text: "2. <a/>",
            value: false,
        }, {
            text: "3. <script/>",
            value: false,
        }, {
            text: "4. <script></script>",
            value: true,
        }],
    },
    {
        number: "Question #3",
        question: "Describe the function of this code:\n if(a){\nconsole.log(\'Hello World\')",
        options: [{
            text: "1. If a is selected, log 'Hello World' to the console",
            value: false,
        }, {
            text: "2. If a is passed, run this function",
            value: false,
        }, {
            text: "3. If a is true, log 'Hello World' to the console",
            value: true,
        }, {
            text: "4. If a is found in the HTML file, log 'Hello World' to the console",
            value: false,
        }],
    },
    {
        number: "Question #4",
        question: "How do you insert JavaScript code in an HTML file?",
        options: [{
            text: "1. == is truthy and === is not",
            value: false,
        }, {
            text: "2. == assigns a value and === declares that two values are equal",
            value: false,
        }, {
            text: "3. == declares that two values are equal and === declares that two values are the same primitive type and equal value",
            value: true,
        }, {
            text: "4. === declares that two values are equal and == declares that two values are the same primitive type and equal value",
            value: false,
        }],
    },
]

// Countdown timer
function countDown() {
    var timer = setInterval(function () {
        $('#timer').text(time);
        time--;
        if (time < 0) {
            clearInterval(timer);
            calculateScore()
        } else if (roundCounter > 4) {
            clearInterval(timer);
            time = 0;
            $('#timer').text(time);
        }
    }, 1000);
}

function beginGame() {
    nextRound();
    countDown();
    btns.css('visibility', 'visible');
    quizStart.css('display', 'none');
}

// Begin Game 
quizStart.on('click', beginGame);


btns.click(function(){
    if($(this).val() === "true"){
        rightAnswer();
    } else if($(this).val() === "false") {
        wrongAnswer();
    }
});
   

function nextRound() {
    if(roundCounter < 4){
        for (var i = 0; i < answerKey[0].options.length; i++) {
            $('#ques-container').children().eq(i).text(answerKey[roundCounter].options[i].text);
            $('#ques-container').children().eq(i).val(answerKey[roundCounter].options[i].value);
            console.log(`button ${i} has a value of ${$('#ques-container').children().eq(i).val()}`);
        }
        quesNum.css('visibility', 'visible').text(answerKey[roundCounter].number);
        question.css('visibility', 'visible').text(answerKey[roundCounter].question);
    } else {
        calculateScore();
    }
}

//Correct
function rightAnswer() {
    answerMessage.css('display', 'block');
    answerMessage.children().first().css('display', 'block');
    setTimeout(cancelMessage, 1000);
    finalScore++;
    roundCounter++;
    nextRound();
}

//Wrong
function wrongAnswer() {
    answerMessage.css('display', 'block');
    answerMessage.children().last().css('display', 'block');
    setTimeout(cancelMessage, 1000);
    roundCounter++;
    time--;
    nextRound();
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
    scorePercentage.text("Your Score: " + scoreTotal + "%");
}


submitBtn.click(function(event){
    event.preventDefault();
    var name = $('<p>').text(scoreTotal + " - " + initials.value);
    $('#score-container').append(name);
    localStorage.setItem(scoreTotal, initials.value);
    scoreInfo.css('display', 'block');
})


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
