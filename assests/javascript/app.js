$(document).ready(function () {
    questions = [{
        question: "What is 1 + 1?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "2",
    }, {
        question: "what is 2 + 2",
        answers: ["4", "5", "6", "7"],
        correctAnswer: "4",
    }];
    var questionsAnswered = 0;
    var correctA = 0;
    var incorrectA = 0;
    var unanswered = 0;
    var timer = 30;
    var questionTimer;


    $("#start").on("click", function () {
        start()
    });



    function game() {
        $(".game").empty();
        countdown()

        var problem = $("<h2>");
        problem.text(questions[questionsAnswered].question);
        $(".game").append(problem);
        for (i = 0; i < questions[questionsAnswered].answers.length; i++) {
            var solutions = $("<button>");
            solutions.text(questions[questionsAnswered].answers[i]).attr("id", "check").attr("data-value", questions[questionsAnswered].answers[i]);
            solutions.click(function () {
                if ($(this).attr("data-value") === questions[questionsAnswered].correctAnswer) {
                    clearTimeout(questionTimer);
                    correctA++
                    correct()
                    console.log("good Job");
                    console.log(correctA);
                } else {
                    clearTimeout(questionTimer);
                    incorrectA++
                    incorrect()
                    console.log("wrong");
                    console.log(incorrectA);

                }
            });
            $(".game").append(solutions);
        }
    }
    function correct() {
        $(".game").empty();
        var youAreRight = $("<h2>");
        youAreRight.text("CORRECT");
        $(".game").append(youAreRight);
        newRound()
    }
    function incorrect(){
        $(".game").empty();
        var youAreWrong = $("<h2>");
        youAreWrong.text("INCORRECT");
        $(".game").append(youAreWrong);
        newRound()
    }
    function ranOutOfTime(){
        $(".game").empty();
        var timeOut = $("<h2>");
        timeOut.text("OUT OF TIME");
        $(".game").append(timeOut);
        newRound()
    }
    function start() {
        game()
    }
    function countdown() {
        timer = 30
        var time = $("<p>");
        time.addClass("timer").text("Time Remaining: " + timer);
        $(".game").append(time);
        questionTimer = setInterval(function () {
            timer--;
            $(".timer").text("Time Remaining: " + timer);
            if (timer <= 0) ranOutOfTime();if (timer <= 0) clearInterval(questionTimer);
        }, 1000);


    }
    function newRound() {
        questionsAnswered++
        setTimeout(function () {
            checkForEndGame()
        }, 6000);
    }
    function checkForEndGame() {
        if (questions[questionsAnswered] === undefined) {
            gameOver()
            console.log("game over");
        } else {
            game()
        }

    }
    function gameOver() {
        $(".game").empty();
        var stats = $("<p>");
        stats.text("Correct Answers: " + correctA);
        $(".game").append(stats);
        var reset = $("<button>");
        reset.text("reset");
        reset.click(function(){
            questionsAnswered = 0;
            correctA = 0;
            incorrectA = 0;
            unanswered = 0;
            game()
        });
        $(".game").append(reset);
    }
});




