
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

    var correct = 0;
    var incorrect = 0;
    var answered = correct + incorrect;
    var numOfQuest = questionArr.length;
    var unanswered = numOfQuest - answered;


    //Triggers game results
    function gameResults() {
        $("#gameStats").show();
        $("#question").hide();
        $("#submitBtn").hide();
        $("#correctAnswers").html("Correct Answers: " + correct);
        $("#incorrectAnswers").html("Incorrect Answers: " + incorrect);
        // $("#unanswered").html("Unanswered: " + unanswered);
        console.log("Correct Answers:" + correct);
        console.log("Incorrect Answers:" + incorrect);
        // console.log("Unanswered:" + unanswered)
    }

    // //Timer function

    // set interval
    var seconds = 10;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }

       //  The decrement function.
    function decrement() {

        //  Decrease number by one.
        seconds--;
  
        //  Show the number in the #show-number tag.
        $("#timeCount").html(seconds);
        console.log(seconds)
  
  
        //  Once number hits zero...
        if (seconds === 0) {
  
          //  ...run the stop function.
          stop();
  
          //  Alert the user that time is up.
          alert("Time Up!");
          gameResults()

        }
      }

      function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
      }

    //Hide unwanted elements
    $("#submitBtn").hide();
    $("#quizArea").hide();
    $("#gameStats").hide();


    //Click start button to load the game
    $("#startBtn").on("click", function () {
        loadQuestion();
       run();

        // var timeLeft = 5 * 1,
        //     display = document.querySelector('#timeCount');
        // startTimer(timeLeft, display);
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
            //event.target references the DOM element that initiated the event.This line of code says get the value from html element that initiated the event, in this case the radio button that the player selected. 
            var userChoice = $(event.target).val();
            // console.log(userChoice);
            // console.log(event.target);
            // console.log(event.currentTarget.name);
            var questionNum = event.currentTarget.name;

            if (userChoice === questionArr[questionNum].correctAnswer) {
                console.log("You guessed right!");
                correct++;
                console.log("Correct answer count is currently equal to: " + correct)
                console.log("Unanswered:" + unanswered);
            }

            else if (userChoice != questionArr[questionNum].correctAnswer) {
                incorrect++;
                console.log("You guessed wrong!");
                console.log("Incorrect answer count is currently equal to: " + incorrect)
                console.log("Unanswered:" + unanswered);
            }

            //This function limits a single click per question name. 
            $(":radio").click(function () {
                var radioName = $(this).attr("name"); //Get radio name
                console.log(radioName) //radio0

                $(":radio[name='" + radioName + "']").attr("disabled", true); //Disable all with the same name

            })
        })



        //Submit answers function
        $("#submitBtn").on("click", function () {
            gameResults()
        })

        $("#playAgainBtn").on("click", function () {
            location.reload();
        })

    }

})


