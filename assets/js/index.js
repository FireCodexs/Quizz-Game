let button = document.querySelector("#start")
let startScreen = document.querySelector("#start-screen")
let questionsScreen = document.querySelector("#questions")
let time = document.querySelector("#time")
let fragment = document.createDocumentFragment();
let choices = document.getElementById("choices")
let underline = document.createElement("hr")

let qArr = [
{question: "What can make the web interface pretty?", answers:["CSS", "JavaScript", "NodeJS", "Python"], correctAnswer: 0},
{question: "How do we combine two different arrays in JavaScript?", answers:["Arr.combine()", "Arr.concat()", "Arr.pushCombine()", "Arr.Add()"], correctAnswer: 1},
{question: "What do you use to avoid repeating code?", answers:["Switch()", "While()", "If()", "For()"], correctAnswer: 3},
{question: "How do you generate a number in JavaScript?", answers:["Generate.Number()", "Math.Floor()", "Math.Random()", "Generate.Random()"], correctAnswer: 2},
{question: "How do you search and return the very first element of a document?", answers:["addEventListener()", "createElement()", "setAttribute()", "querySelector()"], correctAnswer: 3},
]

let currentQuestion = 0;
let globalTimer = 90;

//increment question as we answer

//This is a event listener function that will act as our starting point
//Will hide the starting screen and it will show the question screen
//as well as starting a global time countdown 
button.addEventListener("click", function(){
    startScreen.setAttribute("class", "hide")
    questionsScreen.setAttribute("class", "")
    setInterval(function(){
        globalTimer--
        time.textContent = globalTimer
        if(globalTimer === 0) {
            clearInterval(globalTimer)
            //to add message for losing screen
        }
    },1000)
    displayQuestions()
})


//this function will display the question in regards with the currentQuestion
//and the answers also will be appended to the choices div
function displayQuestions(){
    document.querySelector("#question-title").textContent = qArr[currentQuestion].question
    for(i=0;i<qArr[currentQuestion].answers.length;i++){
        let button = document.createElement("button")
        button.textContent = i+1 + "." + qArr[currentQuestion].answers[i]
        fragment.appendChild(button)
        choices.appendChild(fragment)
        button.setAttribute("data-index", i)
    }
    
    }


//this will set a event listener to the start quiz button
//and also make the validation for questions
choices.addEventListener("click", function(event) {
    choices.innerHTML = "";
    for(i=0;i<qArr.length;i++){

        if(event.target.getAttribute("data-index") == qArr[currentQuestion].correctAnswer){
            console.log("correct")
            choices.appendChild(underline)
            // underline.textContent = "Correct!"
        } else {
            console.log("incorrect")
            choices.appendChild(underline)
            // underline.textContent = "Incorrect!"
            globalTimer -= 10;
        }
        currentQuestion++
        displayQuestions()
    }
    })


//at the end, this will store the remaining score(remaining time)
//and store it locally, for highscores to access





















