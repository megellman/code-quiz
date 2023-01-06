# Code Quiz

## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [git-scm.com](https://git-scm.com/)     |    
| jQuery | [api.jquery.com](https://api.jquery.com/)
<hr/>


## Description

[Click here for Deployed Site](https://megellman.github.io/code-quiz/)

This is a four question quiz that tests the user on their knowledge of Javascript. When the user clicks the Begin button, the first question appears and the timer starts. If the user selects the correct answer, a message appears saying "Correct!". If they select the wrong answer, a message appears saying "Wrong!" and one second is deducted from their time. At the end of the quiz, the user's final score is presented. Once they enter their initials, their initials and score appear on the high score section.

I originally did this project to practice my JavaScript skills as well as gain experience with objects and local storage. I used for loops to iterate through my answer key object to change the content of the questions and option buttons. The scores were saved into local storage which could be cleared by clicking the clear high scores button. 

Halfway through completing this project, I learned about jQuery and decided to use this framework for my project. In creating this project originally with just JavaScript and then later using jQuery for many aspects of this code, I was able to see how differently the code can be formatted when using this framework. 

![Landing Page](./assets/code-quiz.gif)
<hr/>


## Table of Contents 

* [Code Quiz Example](#code-refactor-example)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)
<hr/>


## Code Quiz Example

The question content, such as the question number or the question itself, is housed within this answerKey object. This makes it easy to apply the text content to the corresponding elements. Additionally, having everything in one object makes updating content efficient.
```
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
```

Each time the nextRound function is called, it iterates through the answerKey object and applies the corresponding information. Once the 4th question is answered (roundCounter = 3), the the calculateScore function is called.
```
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
```
<hr/>

## Learning Points

### jQuery
This was the first project that I used a jQuery framework. I found this to be very easy to work with and the code looks much cleaner. For example, in the below code I'm able to make the quesNum element visible and apply the text content that corresponds with the current round. It would have taken two lines rather than one to accomplish this with JavaScript.

```
quesNum.css('visibility', 'visible').text(answerKey[roundCounter].number);
```

<hr/>

## Author Info

### Megan Ellman
[LinkedIn](https://www.linkedin.com/in/megan-ellman/)

[GitHub](https://github.com/megellman)
<hr/>

## Credits 

|Resource | Link |
|-------|:-------:|
|On Click Events | [api.jquery.com](https://api.jquery.com/on/#on-events-selector-data-handler) |
|  jQuery Traversing Methods    | [w3schools.com](https://www.w3schools.com/jquery/jquery_ref_traversing.asp)   |

<hr/>

## License
MIT License

Copyright (c) [2023] [Megan Ellman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.