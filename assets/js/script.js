const questionHolder = document.getElementById('question')
const possibleAnswers = document.getElementById('multiChoice')
const startButton = document.getElementById('startQuiz')
const nextQuestion = document.getElementById('nextQuestion')
const finish = document.getElementById('finish')
const quizInfo = document.getElementById('quizInfo')
const questionCounter = document.getElementById('questionCounter')
const welcomeMessage = document.getElementById('welcomeMessage')
const result = document.getElementById('result')
 
// the current question the user is on
let currentquestion = 0;

// the answers they have chosen
let choices = [];

//Quiz questions 
const quizQuestions = [{
    question: "Which was Canada's first official National Park?",
    choices: ['Banff', 'Glacier', 'Qausuittuq', 'Elk Island'],
    correctAnswer: 0
},
{
    question: 'What is a toque?',
    choices: ['Tool to stoke a fire', 'Traditional instrument', 'Wooly hat', 'A bird'],
    correctAnswer: 2
},
{
    question: "What is Canada's only official bilingual province?",
    choices: ['Quebec', 'New Brunswick', 'Manitoba', 'Nova Scotia'],
    correctAnswer: 1
},
{
    question: 'What is the name of the deepest lake in Canada?',
    choices: ['Lake Louise', 'Morraine Lake', 'Great Slave Lake', '	Lac Mistassini'],
    correctAnswer: 2
},
{
    question: 'How many times zones does Canada have?',
    choices: ['3', '6', '4', '5'],
    correctAnswer: 1 
},
{
    question: 'What animal is an offical emblem of Canada?',
    choices: ['Moose', 'Bear', 'Beaver', 'Racoon'],
    correctAnswer: 2
},
{
    question: 'Which of the following was NOT a Canadian Invention?',
    choices: ['The Paint Roller', 'Peanut Butter', 'Electric Wheelchair', 'Chainsaw'],
    correctAnswer: 3
},
{
    question: 'What is the nickname for the Canadian one dollar coin?',
    choices: ['The Loonie', 'The Canuckle', 'The Hoser', 'The Johnny Mac'],
    correctAnswer: 0
},
{
    question: 'How many oceans border Canada?',
    choices: ['1', '2', '3', '4'],
    correctAnswer: 2
},
{
    question: 'What is a Canadian Tuxedo?',
    choices: ['All denimn outfit', 'A drink', 'Ski outfit', 'Red and white tuxedo'],
    correctAnswer: 2
}
]

function setup () {
    nextQuestion.style.display = 'none';
    finish.style.display = 'none';
    questionCounter.style.display = 'none';
    result.style.display = 'none';
}


//when the user clicks start it will rest, hide the start button and show the next button
startButton.onclick = function() {
    choices = [];
    currentquestion = 0; //fix naming convention
    startButton.style.display = 'none';
    finish.style.display = 'none';
    welcomeMessage.style.display = 'none';
    result.style.display = 'none';

    nextQuestion.style.display = 'block';
    questionCounter.style.display = 'block';
    quizInfo.style.display = 'block';

    displayQuestion(currentquestion);
    questionCounter.innerHTML = 'Question 1 of ' + quizQuestions.length;
    console.log('check start button') //remove
}

nextQuestion.onclick = function() {
    chooseSelection();
    currentquestion++;
    displayQuestion(currentquestion);
    updateQuestionCounter(currentquestion + 1);

    //option to finish quiz at the end
    if(currentquestion == quizQuestions.length -1) {
        nextQuestion.style.display = 'none';
        finish.style.display = 'block';
    }
}
 
//iterate through all question answer options and if the radio box is checked, store that choice in the array
function chooseSelection() {
    var radioButtons = document.getElementsByName("question"+currentquestion+"_choice")

    for (var i = 0; i < radioButtons.length; i++) {
        console.log(radioButtons[i]) // remove
     if (radioButtons[i].checked) {
        choices[currentquestion] = i;
    }
}
}

finish.onclick = function() {
    chooseSelection();
    questionCounter.style.display = 'none';
    result.style.display = 'block';

    var numberCorrectAnswers = 0;
    console.log('choices') //remove

    for( var i = 0; i < quizQuestions.length; i++) {
        if (quizQuestions[i].correctAnswer == choices[i]) {
            numberCorrectAnswers++;
        }
    }
     result.innerHTML = "Score: " + numberCorrectAnswers + " of " + quizQuestions.length;
}

// update the question counter
function updateQuestionCounter (number) {
    questionCounter.innerHTML = "Question " + number + " of  " + quizQuestions.length;
}

//display each question 
function displayQuestion(qNum) {
    let individualQuestion = quizQuestions[currentquestion];
    questionHolder.innerText = individualQuestion.question;
 //reset choices list
    possibleAnswers.innerHTML = ""; 
    for(key in individualQuestion.choices){
        let radioBtnName = "question"+currentquestion+"_choice";
        let choiceText = individualQuestion.choices[key];
        possibleAnswers.appendChild(createLi(radioBtnName,choiceText));
    }
    console.log('display function')
}

//create list of possible answers 
function createLi (name, choiceText) {
    let list = document.createElement('li')
    let radioHtml = '<input type="radio" name="' + name + '"';    
    radioHtml += '/>';
    radioHtml += choiceText;        
    list.innerHTML = radioHtml;
    console.log('creat list items')
    return list;
}

function questionCounterr() {
    let counter = parseInt(document.getElementById("questionCounter").innerText);
    document.getElementById("questionCounter").innerText = ++counter;
}
 
setup();



