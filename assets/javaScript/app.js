
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
    var answered = correct+incorrect;
    // var unanswered = questionArr.length-answered;
    // var counter = seconds;
    // var seconds = 30;

    //Hide unwanted elements
    $("#submitBtn").hide();
    $("#quizArea").hide();
    $("#gameStats").hide();


    // Timer Countdown, begins at count
    var n = 60;



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





    //Click start button to load the game
    $("#startBtn").on("click", function () {
        loadQuestion();
    })
    function loadQuestion() {
        
        //Show/hide elements
        $("#quizArea").show();
        // $("#jumbo").hide();
        $("#startBtn").hide();

        //GEnerate quetsion list
        for (var i = 0; i < questionArr.length; i++) {
            $("#question").append("<h4>" + questionArr[i].question + "</h4>");

            for (var j = 0; j < questionArr[i].choices.length; j++) {
                $("#question").append('<input type="radio" class="radioButton" name="' + i + '" value="' + questionArr[i].choices[j] + '">' + questionArr[i].choices[j] + '</input>');
            }
            //Display the Submit Button
            $("#submitBtn").show();
        }

        $('.radioButton').on('click', function (event) {
            ;
            //event.target references he DOM element that initiated the event.This line of code says get the value from html element that initiated the event, in this case the radio button that the player selected. 
            var userChoice = $(event.target).val();
            console.log(userChoice);
            console.log(event.target);
            console.log(event.currentTarget.name);
            var questionNum = event.currentTarget.name;
    

            if (userChoice === questionArr[questionNum].correctAnswer) {
                ;
                console.log("You guessed right!");
                correct++;
                console.log(correct)

            }

            else if (userChoice != questionArr[questionNum].correctAnswer) {
                ;
                incorrect++;
                console.log("You guessed wrong!");
                console.log(incorrect)

            }

            else {
                ;
                unanswered++;
            }

        })

        //Submit answers function
        $("#submitBtn").on("click", function () {
            $("#gameStats").show();
            $("#question").hide();
            $("#submitBtn").hide();
            $("#correctAnswers").html("Correct Answers: " + correct)
            $("#incorrectAnswers").html("Incorrect Answers: " + incorrect)
            // $("#unanswered").html("Unanswered: " + unanswered)

            console.log(correct);
            console.log(incorrect);
            console.log(unanswered);
        })


        


        $("#playAgainBtn").on("click", function () {
            location.reload()
    
        })

    }


})


