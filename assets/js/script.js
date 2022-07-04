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
}]

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
    questionCounter.innerHTML = 'Question 1 of' + quizQuestions.length;
    console.log('check start button')
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
 


