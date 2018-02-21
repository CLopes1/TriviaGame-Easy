
$(document).ready(function () {

    var questionArr = [
        {
            question: "What is the capital of New Jersey?",
            choices: ["Hamilton", "Cherry Hill", "Edison", "Trenton"],
            correctAnswer: "Trenton",
        },
        {
            question: "What is the state bird of New Jersey?",
            choices: ["Cardinal", "Bluejay", "Raven", "American Goldfinch"],
            correctAnswer: "American Goldfinch",
        },
        {
            question: "What is New Jersey's professional hockey team?",
            choices: ["Devils", "Rangers", "Flyers", "Islanders"],
            correctAnswer: "Trenton",
        }
    ]

    // var currentQuestion = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var counter = seconds;
    var seconds = 30;




    $("#startBtn").on("click", function () {
        loadQuestion()

    })

    function loadQuestion() {

        $("#startBtn").hide()

        for (var i = 0; i < questionArr.length; i++) {
            $("#question").append("<h4>" + questionArr[i].question + "</h4>");

            for (var j = 0; j < questionArr[i].choices.length; j++) {

                $("#question").append('<input type="radio" class="radioButton" name="triviaQuestion' + i + '" value="' + questionArr[i].choices[j] + '">' + questionArr[i].choices[j] + '</button>');
            }

            for (var k = 0; k < questionArr[i].correctAnswer; k++) {
                console.log(correctAnswer[k])
            }

        }

        $('#question').on("change", function () {
            var userChoice = $('input:checked').val();
            console.log("You selected " + userChoice);

                if (userChoice === questionArr[i].correctAnswer[k]) {
                    correct++
                    console.log(correct)
                }

                else if (userChoice != questionArr[i].correctAnswer[k]) {
                    incorrect++
                    console.log(incorrect)
                }

                else {
                    unanswered++
                    console.log(unanswered)
                }

        })
    }

})



        // $('#question input').on('change', function () {
        // alert($('input[name=triviaQuestion]:checked', '#question').val());
        // alert($('input:checked', '#question').val());
        // alert($('input:radio:checked').val());


        // $("#questions").append(questionThing);   

        // $(".radioButton").on("click", function () {
        //     console.log("hello")








    // $("#question").html("<h4>" + questionArr[currentQuestion].question + "</h4>");

    // for (var i = 0; i < questionArr[currentQuestion].choices.length; i++) {
    //     $("#question").append("<button class='choiceBtn' id='button' multChoice='" + questionArr[currentQuestion].choices[i]
    //         + "'>" + questionArr[currentQuestion].choices[i] + "</button>");
    // }

    // }
