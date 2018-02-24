
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
        },
        {
            question: "True or false: New Jersey is the only state in the country to have all of its counties marked as metropolitan areas.",
            choices: ["True", "False"],
            correctAnswer: "True",
        },
        {
            question: "New Jersey has the most '_____' per capita in THE WORLD.?",
            choices: ["Trees", "People", "Diners", "Gardens"],
            correctAnswer: "Diners",
        },
        {
            question: "Which town holds the distinction of being the oldest seashore resort in the United States and one of the most unique.?",
            choices: ["Absecon", "Jersey City", "Cape May", "Belmar"],
            correctAnswer: "Cape May",
        },
        {
            question: "Which New Jersey city is home to the largest seaport in the U.S.?",
            choices: ["Long Island", "Montclair", "Manhattan", "Elizabeth"],
            correctAnswer: "Elizabeth",
        },
        {
            question: "Which city in NJ was the game Monopoly modeled after?",
            choices: ["Atlantic City", "Monroe", "Hoboken", "Boulder"],
            correctAnswer: "Atlantic City",
        },
        {
            question: "True or false: Atlantic city has the longest boardwalk in the world.",
            choices: ["True", "False"],
            correctAnswer: "True",
        },
        {
            question: "What is the state insect of New Jersey?",
            choices: ["Ladybug", "Praying Mantis", "Wolf Spider", "Honey Bee"],
            correctAnswer: "Honey Bee",
        },
        {
            question: "How many miles of coastline does New Jersey have?",
            choices: ["111", "27", "44", "130"],
            correctAnswer: "130",
        },
        {
            question: "Which one of these celebrities is a New Jersey native?",
            choices: ["Jack Nicholson", "Bruce Springsteen", "Bon Jovi", "Whitney Houston", "All the above"],
            correctAnswer: "All the above",
        },

    ]

    var correct = 0;
    var incorrect = 0;
    var answered = 0;
    var unanswered = 0;


    //Shows Game Results-------------------------------------------------------------------------------------------
    function gameResults() {
        answered = correct+incorrect;
        unanswered = questionArr.length-answered;
        $("#timeBox").hide();
        $("#gameStats").show();
        $("#question").hide();
        $("#submitBtn").hide();
        $("#correctAnswers").html("Correct Answers: " + correct);
        $("#incorrectAnswers").html("Incorrect Answers: " + incorrect);
        $("#unanswered").html("Unanswered: "+ unanswered);
        console.log("Correct Answers:" + correct);
        console.log("Incorrect Answers:" + incorrect);

    }

    // //Timer function----------------------------------------------------------------------------------------------
    // Set interval for the timer
    var seconds = 60;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() { //  The decrement function.


        seconds--; //  Decrease number by one.

        //  Show the number in the #timeCount tag.
        $("#timeCount").html(seconds);
        // console.log(seconds)


        //  Once number hits zero...
        if (seconds === 0) {

            //  ...run the stop function.
            stop();

            //  Alert the user that time is up and show game results. 
            alert("Time Up!");
            gameResults()
        }
    }

    //  Stops the timer by clearing the intervalId. This passes the name of the interval "intervalId" to the clearInterval function."
    function stop() {
        clearInterval(intervalId);
    }
    // --------------------------------------------------------------------------------------------------------------------------
    //Hide unwanted elements
    $("#submitBtn").hide();
    $("#quizArea").hide();
    $("#gameStats").hide();

    // START GAME----------------------------------------------------------------------------------------------------------------

    //Click start button to load the game
    $("#startBtn").on("click", function () {
        loadQuestion();
        run();
        //Show/hide unwanted elements
        $("#quizArea").show();
        $("#startBtn").hide();
    })

    //Load the questions and answers----------------------------------------------------------------------------------------------
    function loadQuestion() {

        //Loop through questionArr and append each question to the HTML
        for (var i = 0; i < questionArr.length; i++) {
            $("#question").append("<h4>" + questionArr[i].question + "</h4>");

            //Loop through each choices 
            for (var j = 0; j < questionArr[i].choices.length; j++) {
                $("#question").append('<input type="radio" class="radioButton" name="' + i + '" value="' + questionArr[i].choices[j] + '">' + questionArr[i].choices[j] + '</input>');
            }
            //Show the submit your questions button
            $("#submitBtn").show();
        }

        //This function limits a single click per question name. 
        $(":radio").click(function () {
            var radioName = $(this).attr("name"); //Get radio name
            console.log(radioName) //radio0

            $(":radio[name='" + radioName + "']").attr("disabled", true); //Disable all with the same name

        })

        //Log the user's selection and compare it to the respective answer----------------------------------------------------------
        $('.radioButton').on('click', function (event) {
            answered++;
            console.log("answered =" + answered)
            console.log("unanswered =" + unanswered)
            //event.target references the DOM element that initiated the event.This line of code says get the value from html element that initiated the event, in this case the radio button that the player selected. 
            var userChoice = $(event.target).val();
            // console.log(userChoice);
            // console.log(event.target);
            // console.log(event.currentTarget.name);
            var questionNum = event.currentTarget.name; //event.currentTarget.name is the datapath located within the input node.

            if (userChoice === questionArr[questionNum].correctAnswer) {
                console.log("You guessed right!");
                correct++;
                answered++;
                console.log("Correct answer count is currently equal to: " + correct)
            }

            else if (userChoice != questionArr[questionNum].correctAnswer) {
                incorrect++;
                answered++;

                console.log("You guessed wrong!");
                console.log("Incorrect answer count is currently equal to: " + incorrect)
            }
        })

        //Submit answers function.
        $("#submitBtn").on("click", function () {
            stop();//stop game timer
            gameResults()
        })

        //Reset game when clicking play again button.
        $("#playAgainBtn").on("click", function () {
            location.reload();
        })

    }

})


