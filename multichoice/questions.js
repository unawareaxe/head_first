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
    for (var index in questions) {
        $('#question-container').append('<div id="question'+ index +'" class="question"><h3>'+ questions[index].question +'</h3></div>');

        for (var answerIndex in questions[index].answers) {
            $('#question'+index).append('<div class="answer-buttons"><button id="question'+ index +'answer'+ answerIndex +'" class="answer-button" onclick="checkAnswer('+ questions[index].answers[answerIndex].is_correct +',event)">'+ questions[index].answers[answerIndex].answer +'</button></div>')
        }
    }
}

function checkAnswer(isCorrect,event) {
    console.log(event.target.id);

    $('.answer-button').each(function() {
        $(this).removeClass('btn-success');
        $(this).removeClass('btn-danger');
    })

    if (isCorrect == true) {
        $('#'+event.target.id).addClass('btn-success')
    } else {
        $('#'+event.target.id).addClass('btn-danger')
    }
}