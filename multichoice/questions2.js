var questions = {
    'question1':{
        "question_text":"#0: Whats my favourite colour?",
        "correct_answer":"answer2",
        "class":""
    },
    'question2':{
        "question_text":"#1: Whats my favourite colour?",
        "correct_answer":"answer3",
        "class":""
    },
    'question3':{
        "question_text":"#2: Whats my favourite colour?",
        "correct_answer":"answer1",
        "class":""
    }
};

var answers = {
    "answer1":{
        "answer_text":"blue",
        "class":""
    },
    "answer2":{
        "answer_text":"green",
        "class":""
    },
    "answer3":{
        "answer_text":"red",
        "class":""
    },
    "answer4":{
        "answer_text":"orange",
        "class":"orange-btn"
    }
};

function listQuestions() {
    // LOOPING THROUGH QUESTIONS
    for (var questionKey in questions) {
        // MAKING THE QUESTION HTML ELEMENT
        // WE ARE ADDING THE QUESTION TEXT INTO THE QUESTION-CONTAINER DIV
        $('#question-container').append(`
        <div id="`+ questionKey +`" class="question">
            <h3>`+ questions[questionKey].question_text +`</h3>
        </div>`);
        // MAKING THE ANSWER BUTTON HTML AND PUTTING IT IN OUR QUESTION HTML ELEMENT
        // WE ARE ADDING TEXT IN THE BUTTONS
        for (var answerKey in answers) {
            $('#'+questionKey).append(`
            <div class="answer-button-container">
                <button class="answer-button `+ answers[answerKey].class +`">`
                + answers[answerKey].answer_text +`
                </button>
            </div>`);
        }
    }
}

function checkAnswer(isCorrect,event) {
    // LOOPING ALL ANSWER BUTTONS AND REMOVING CLASSES
    $('.answer-button').each(function() {
        $(this).removeClass('btn-success');
        $(this).removeClass('btn-danger');
    })

    // CHECKING IF THE CLICKED ANSWER IS CORRECT AND ADDING CLASS FOR STYLING
    if (isCorrect == true) {
        $('#'+event.target.id).addClass('btn-success')
    } else {
        $('#'+event.target.id).addClass('btn-danger')
    }
}