var questions = [
    {
        "id":1,
        "question":"#0: Whats my favourite colour?",
        "answers":[
            {
               "answer":"blue",
               "is_correct":false
            },
            {
                "answer":"green",
                "is_correct":false
            },
            {
                "answer":"red",
                "is_correct":true
            },
            {
                "answer":"orange",
                "is_correct":false
            },
        ]
    },
    {
        "id":2,
        "question":"#1: Whats my favourite colour?",
        "answers":[
            {
                "answer":"blue",
                "is_correct":false
             },
             {
                 "answer":"green",
                 "is_correct":true
             },
             {
                 "answer":"red",
                 "is_correct":false
             },
             {
                 "answer":"orange",
                 "is_correct":false
             },
        ]
    },
    {
        "id":3,
        "question":"#2: Whats my favourite colour?",
        "answers":[
            {
                "answer":"blue",
                "is_correct":true
             },
             {
                 "answer":"green",
                 "is_correct":false
             },
             {
                 "answer":"red",
                 "is_correct":false
             },
             {
                 "answer":"orange",
                 "is_correct":false
             },
        ]
    },
];

function listQuestions() {
    // LOOPING THROUGH QUESTIONS
    for (var index in questions) {
        // MAKING THE QUESTION HTML ELEMENT
        // WE ARE ADDING THE QUESTION TEXT INTO THE QUESTION-CONTAINER DIV
        $('#question-container').append(`
        <div id="question`+ index +`" class="question">
            <h3>`+ questions[index].question +`</h3>
        </div>`);
        // MAKING THE ANSWER BUTTON HTML AND PUTTING IT IN OUR QUESTION HTML ELEMENT
        // WE ARE ADDING TEXT IN THE BUTTONS
        for (var answerIndex in questions[index].answers) {
            $('#question'+index).append(`
            <div class="answer-buttons">
                <button id="question`+ index +`answer`+ answerIndex +`" 
                class="answer-button" onclick="checkAnswer('+ questions[index].answers[answerIndex].is_correct +',event)">`
                + questions[index].answers[answerIndex].answer +`
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