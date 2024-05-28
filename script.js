let questions = [
    {
        "question": "in welchem Land wurde Minecraft erfunden?",
        "answer_1": "Deutschland",
        "answer_2": "Schweden",
        "answer_3": "USA",
        "answer_4": "Japan",
        "right_answer": 2
    },
    {
        "question": "in welchem Land gibt es die meisten Vulkane?",
        "answer_1": "China",
        "answer_2": "Mexiko",
        "answer_3": "Indonesien",
        "answer_4": "Island",
        "right_answer": 3
    },
    {
        "question": "Was ist das erfolgreichste Spiel aller Zeiten?",
        "answer_1": "Fortnite",
        "answer_2": "Minecraft",
        "answer_3": "Grand Theft Auto V",
        "answer_4": "Tetris",
        "right_answer": 2
    },
    {
        "question": "Was ist das häufigste tier der welt?",
        "answer_1": "Katzen",
        "answer_2": "Krebse",
        "answer_3": "Grillen",
        "answer_4": "Fadenwürmer",
        "right_answer": 4
    },
    {
        "question": "Wie viel kostet die teuerste Uhr der Welt?",
        "answer_1": "55 Millionen",
        "answer_2": "235 Millionen",
        "answer_3": "20 Millionen",
        "answer_4": "12 Milliarde",
        "right_answer": 1
    },
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/fail.mp3');
let AUDIO_FAIL = new Audio('audio/correct.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        // Show End Screen
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';

        document.getElementById('amount-Of-Questions').innerHTML = questions.length;
        document.getElementById('amount-Of-rigth-Questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/trophy.png';
    } else { // show question

        let percent = (currentQuestion + 1) / questions.length;
        percent = percent * 100;


        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;


        console.log('Fortschritt', percent);

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = 'img/pancel.jpg';
    document.getElementById('questionBody').style = ''; 
    document.getElementById('endScreen').style = 'display: none'; 

    rightQuestions = 0;
    currentQuestion = 0;
    init();
}