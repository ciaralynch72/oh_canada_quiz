const questionHolder = document.getElementById('question')
const possibleAnswers = document.getElementById('multiChoice')
const startButton = document.getElementById('startQuiz')

//Quiz questions 
const quizQuestions = [{
    question: "Which was Canada's first offical National Park?",
    choices: ['Banff', 'Glacier', 'Qausuittuq', 'Elk Island'],
    correctAnswer: 1
},
{
    question: 'What is a toque?',
    choices: ['Tool to stoke a fire', 'Traditional instrument', 'Wooly hat', 'A bird'],
    correctAnswer: 3
},
{
    question: "What is Canada's only official bilingual province?",
    choices: ['Quebec', 'New Brunswick', 'Manitoba', 'Nova Scotia'],
    correctAnswer: 2
},
{
    question: 'What is the name of the deepest lake in Canada?',
    choices: ['Lake Louise', 'Morraine Lake', 'Great Slave Lake', '	Lac Mistassini'],
    correctAnswer: 3
},
{
    question: 'How many times zones does Canada have?',
    choices: ['3', '6', '4', '5'],
    correctAnswer: 2 
},
{
    question: 'What animal is an offical emblem of Canada?',
    choices: ['Moose', 'Bear', 'Beaver', 'Racoon'],
    correctAnswer: 3
},
{
    question: 'Which of the following was NOT a Canadian Invention?',
    choices: ['The Paint Roller', 'Peanut Butter', 'Electric Wheelchair', 'Chainsaw'],
    correctAnswer: 4
}]

//Initiating some variables
let i = 0;
const correctAnswer = 0;

startButton.onclick = function() {
    /*itterate through questions*/    
    if(i > quizQuestions.length -1){
       i=0;       
    }    
    displayQuestion(i);
    i++;
}
//displayQuestion
function displayQuestion(qNum) {
    let individualQuestion = quizQuestions[i];
    questionHolder.innerText = individualQuestion.question;

    possibleAnswers.innerHTML = ""; //reset choices list
    for(key in individualQuestion.choices){
        let radioBtnName = "question"+i+"_choice";
        let choiceText = individualQuestion.choices[key];
        possibleAnswers.appendChild(createLi(radioBtnName,choiceText));
    }
}
//create list of possible answers 
function createLi(name, choiceText) {
    let e = document.createElement('li');
    let radioHtml = '<input type="radio" name="' + name + '"';    
    radioHtml += '/>';
    radioHtml += choiceText;        
    e.innerHTML = radioHtml;        
    return e;
}

