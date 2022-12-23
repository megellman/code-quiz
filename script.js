var container = document.querySelector("#quiz-container");
var btns = document.querySelectorAll(".questions");
var quizStart = document.querySelector("#btn-start");

// Begin Game 
quizStart.addEventListener("click", function(){
    for(var i = 0; i < btns.length; i++){
        btns[i].style.visibility = "visible";
    }
    
    quizStart.style.display = "none";

    // Prev Button 
    var prev = document.createElement("button");
    container.appendChild(prev);
    prev.textContent = "Prev";
    prev.style.marginLeft = "10px";
    prev.style.marginRight = "190px";
    prev.style.marginTop = "5x0px";
    prev.style.marginBottom = "10px";
    prev.style.borderWidth = "3px";

    // Next button 
    var next = document.createElement("button");
    container.appendChild(next);
    next.textContent = "Next";
    next.style.marginTop = "50px";
    next.style.marginBottom = "10px";
    next.style.borderWidth = "3px";

    
})



