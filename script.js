var container = document.querySelector("#quiz-container");
var btns = document.querySelectorAll(".questions");
var quizStart = document.querySelector("#btn-start");
var quesOne = document.querySelector("#ques-one");
var quesTwo = document.querySelector("#ques-two");
var quesThree = document.querySelector("#ques-three");
var quesFour = document.querySelector("#ques-four");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var quesNum = document.querySelector("#ques-num");
var roundCounter = 0;

// Begin Game 
quizStart.addEventListener("click", roundOne);

// 
function roundOne(){
    for(var i = 0; i < btns.length; i++){
        btns[i].style.visibility = "visible";
    }
    quesOne.textContent = "1. sample";
    quesTwo.textContent = "2. sample";
    quesThree.textContent = "3. sample";
    quesFour.textContent = "4. sample";
    quizStart.style.display = "none";
    prev.style.display = "inline";
    next.style.display = "inline";
    quesNum.style.visibility = "visible";
    quesNum.textContent = "Question #1";
}

if(roundOne){
    roundCounter++;
}

function roundTwo(){
    quesOne.textContent = "1. text";
    quesTwo.textContent = "2. text";
    quesThree.textContent = "3. text";
    quesFour.textContent = "4. text";
    quesNum.textContent = "Question #2";
}

function roundThree(){
    quesOne.textContent = "1. check";
    quesTwo.textContent = "2. check";
    quesThree.textContent = "3. check";
    quesFour.textContent = "4. check";
    quesNum.textContent = "Question #3";
}

function roundFour(){
    quesOne.textContent = "1. test";
    quesTwo.textContent = "2. test";
    quesThree.textContent = "3. test";
    quesFour.textContent = "4. test";
    quesNum.textContent = "Question #4";
}

next.addEventListener("click", function(){
    if(roundCounter === 1){
        roundCounter++;
        roundTwo();
    } else if(roundCounter === 2){
        roundCounter++;
        roundThree();
    } else if(roundCounter === 3){
        roundCounter++;
        roundFour();
    } else {
        console.log("game over!");
    }
});

prev.addEventListener("click", function(){
    if(roundCounter === 4){
        roundThree();
        roundCounter--;
    } else if(roundCounter === 3){
        roundTwo();
        roundCounter--;
    } else if(roundCounter === 2){
        roundOne();
        roundCounter--;
    } else if(roundCounter === 1){
        quizStart.style.display = "inline";
        prev.style.display = "none";
        next.style.display = "none";
        quesNum.style.visibility = "hidden";
        for(var i = 0; i < btns.length; i++){
            btns[i].style.visibility = "hidden";
        }
        return
    }
})