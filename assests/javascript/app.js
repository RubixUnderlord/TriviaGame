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
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timer = 30;


    $("#start").on("click", function () {
        start()
    });
    //$("#check").on("click", function () {
     //   checkifCorrect()
    //});


    function game() {
        $(".game").empty();
        countdown()

        var problem = $("<h2>");
        problem.text(questions[questionsAnswered].question);
        $(".game").append(problem);
        for (i = 0; i < questions[questionsAnswered].answers.length; i++) {
            var solutions = $("<button>");
            solutions.text(questions[questionsAnswered].answers[i]).attr("id", "check").attr("data-value", questions[questionsAnswered].answers[i]);
            solutions.click(function(){
                if ($(this).attr("data-value") === questions[questionsAnswered].correctAnswer){
                    //correct()
                    console.log("good Job");
                }else{
                    console.log($(this).attr("data-value"));
                    console.log(questions[questionsAnswered].correctAnswer);
                }
            });
            $(".game").append(solutions);
        }
    }

    function start() {
        game()
    }
    function countdown() {
        timer = 30
        var time = $("<p>");
        time.addClass("timer").text("Time Remaining: " + timer);
        $(".game").append(time);
        var questionTimer = setInterval(function () {
            timer--;
            $(".timer").text("Time Remaining: " + timer);
            if (timer <= 0) clearInterval(questionTimer);
        }, 1000);
        setTimeout(function () {
            game()
        }, 36000);

    }
    function checkifCorrect() {

    }
    while (timer === 0) {
        game()
    }
});




