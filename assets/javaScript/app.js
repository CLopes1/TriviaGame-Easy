
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
            correctAnswer: "Devils",
        },
        {
            question: "Which NBA team left New Jersey to play in Brooklyn?",
            choices: ["Giants", "Nets", "Knicks", "Celtics"],
            correctAnswer: "Nets",
        },
        {
            question: "On what island is Governor's mansion located?",
            choices: ["Long Beach Island", "Absecon Island", "Island Beach", "Brigantine Island"],
            correctAnswer: "Island Beach",
        }
    ]

    // var currentQuestion = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    // var counter = seconds;
    // var seconds = 30;

    //Hide submit button
    $("#submitBtn").hide()


    // Timer Countdown, begins at count
    var n = 60



    // function countDown() {
    //     n--;
    //     if (n > 0) {
    //         setTimeout(countDown, 1000);
    //     }
    //     else if (n <= 0) {
    //         // alert shows how many correct, and how many incorrect
    //         alert('Times Up!\n Correct Guesses: ' + correct + '\n Incorrect: ' + incorrect + "")
    //     }
    //     $(".timecount").html(n)

    // }




    $("#startBtn").on("click", function () {
        loadQuestion()

    })

    function loadQuestion() {

        $("#startBtn").hide()

        for (var i = 0; i < questionArr.length; i++) {
            $("#question").append("<h4>" + questionArr[i].question + "</h4>");

            for (var j = 0; j < questionArr[i].choices.length; j++) {

                $("#question").append('<input type="radio" class="radioButton" name="' + i + '" value="' + questionArr[i].choices[j] + '">' + questionArr[i].choices[j] + '</input>');
``
            }

            $("#submitBtn").show()
        }
        
        $('.radioButton').on('click', function (event) {
            var userChoice = $(event.target).val()
            console.log(userChoice)
            console.log(event.target)
            console.log(event.currentTarget.name)
            var questionNum = event.currentTarget.name

            if (userChoice===questionArr[questionNum].correctAnswer){
            console.log("You guessed right!")
            correct++
            
            }
            
            else {
            incorrect ++
                console.log("You guessed wrong!")
            }

        })

        $("#submitBtn").on("click", function () {
            console.log(correct)
            console.log(incorrect)
        })

    }

})


        //             if (userChoice === questionArr[i].correctAnswer[k]) {
        //                 correct++
        //                 console.log(correct)
        //             }

        //             else if (userChoice != questionArr[i].correctAnswer[k]) {
        //                 incorrect++
        //                 console.log(incorrect)
        //             }

        //             else {
        //                 unanswered++
        //                 console.log(unanswered)
        //             }

        // })


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
