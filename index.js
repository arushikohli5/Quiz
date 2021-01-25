 const questions=[
            {
                question: "Which of the following function of Array object joins all elements of an array into a string?",
                answers:[
                    "concat()",
                    "join()",
                    "pop",
                    "map()"
                ],
                correctAnswer:"join()",
                score:1,
            },
            {
                question: "Who invented JavaScript?",
                answers: [
                    "Douglas Crockford",
                    "Sheryl Sandberg",
                    "Brendan Eich",
                    "abc"
                ],
                correctAnswer: "Brendan Eich",
                score:1,
            },
            {
                question:"Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
                answers:[
                    "pop()",
                    "push()",
                    "reduce()",
                    "reduceRight()"
                ],
                correctAnswer:"reduceRight()",
                score:1,
            },
            {
                question:"Which of the following function of String object returns the index within the calling String object of    e last occurrence of the specified value",
                answers:[
                    "lastIndexOf()",
                    "search()",
                    "substr()",
                    "indexOf()"
                ],
                correctAnswer:"lastIndexOf()",
                score:1,
            },
            {
                question:"Which built-in method returns the character at the specified index?",
                answers:[
                    "characterAt()",
                    "getCharAt()",
                    "charAt()",
                    "None of the above"
                ],
                correctAnswer:"charAt()",
                score:1,
            },
            {
                question: "Which tool can you use to ensure code quality?",
                answers: [
                    "Angular",
                    "jQuery",
                    "RequireS",
                    "ESLint"
                ],
                correctAnswer: "ESLint",
                score:1,
            },
            {
                question:" Which of the following function of String object causes a string to be displayed in the specified color as if it were in a tag",
                answers:[
                    "fixed()",
                    "fontcolor()",
                    "blink()",
                    "bold()"
                ],
                correctAnswer:"fontcolor()",
                score:1,
            },
            {
                question: "Which one of these is a JavaScript package manager?",
                answers: [
                    "Node.js",
                    "TypeScript",
                    "npm",
                    "xyz"
                ],
                correctAnswer: "npm",
                score:1,
            },
            {
                question: "Who invented JavaScript?",
                answers: [
                    "Douglas Crockford",
                    "Sheryl Sandberg",
                    "Brendan Eich",
                    "afghjk"
                ],
                correctAnswer: "Brendan Eich",
                score:1,
            },
            {
                question: "Which of the following function of Array object joins all elements of an array into a string?",
                answers:[
                        "concat()",
                        "join()",
                        "pop()",
                        "map()"
                ],
                correctAnswer:"join()",
                score:1,
            },
        ];


var index=0;
var score=0;

var header=document.getElementById('header');
var answerKeyHeading=document.getElementById('answerKeyHeading');
var quiz=document.getElementById('quiz');
var answerKey=document.getElementById('answerKey');
var statement=document.getElementById('statement');
var correct=document.getElementById('correct');
var incorrect=document.getElementById('incorrect');
var submit=document.getElementById('Submit');
var next=document.getElementById('next');
var restart=document.getElementById('restart');
var option = document.getElementsByName('option');
var labels = document.getElementsByTagName('label');
displayNextQuestion();
function displayNextQuestion(){
    if(index===questions.length){
        header.innerHTML=`Score:${score}`;
        quiz.classList.add('d-none');
        answerKeyHeading.classList.remove('d-none');
        answerKey.classList.remove('d-none');
        setUpAnswers();
        restart.classList.remove('d-none');
        next.classList.add('d-none');
        return;      
    }

    const question1=questions[index];
    statement.innerHTML=question1.question;
    for(let i=0;i<option.length;i++){
        option[i].disabled=false;
        option[i].checked=false;
        option[i].value=question1.answers[i];
        labels[i].innerHTML=question1.answers[i];
    }
    next.classList.add('d-none');
    correct.classList.add('d-none');
    incorrect.classList.add('d-none');
    submit.classList.remove('d-none');
}

function checkAnswers(){
    var selected=null;
    for(let i=0;i<option.length;i++)
    {
        if(option[i].checked){
            selected=option[i].value;
        }
    }
    if(!selected){
        alert("Please Select An option");
    }

    else{
        for(let i=0;i<option.length;i++){
            option[i].disabled=true;
        }

        if(selected===questions[index].correctAnswer){
            correct.classList.remove('d-none');
            score+=questions[index].score;
        }
        else{
            incorrect.classList.remove('d-none');
        }

        index++;
        submit.classList.add('d-none');
        next.classList.remove('d-none');
    }
}



function setUpAnswers(){
    var ul=document.createElement('ul');
    ul.setAttribute('id','answerList');

    for(let i=0;i<questions.length;i++){
        var li=document.createElement('li');
        var text=document.createTextNode(questions[i].question + ' - ');
        var span=document.createElement('span');

        span.classList.add('badge');
        span.classList.add('badge-success');
        span.innerHTML=questions[i].answers;
        li.appendChild(text);
        li.appendChild(span);
        ul.appendChild(li);
    }
    
    answerKey.appendChild(ul);
}


function restartQuiz(){
    index=0;
    score=0;
    header.innerHTML="Quiz";
    quiz.classList.remove('d-none');
    restart.classList.add('d-none');
    answerKey.classList.add('d-none');
    answerKeyHeading.classList.add('d-none');
    var ul=document.getElementById('answerList');
    if(ul){
        answerKey.removeChild(ul);
    }
    displayNextQuestion();
}


submit.addEventListener('click',checkAnswers);
next.addEventListener('click',displayNextQuestion);
restart.addEventListener('click',restartQuiz);
























