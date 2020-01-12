$(document).ready(function () {
    questions = [{
        question: "What is the capital of Taiwan?",
        answers: ["Taipei", "Beijing", "Shanhai", "Hong Kong"],
        correctAnswer: "Taipei",
    }, {
        question: "Who wrote Moby Dick?",
        answers: ["Jane Erye", "Charles Dickens", "Herman Melville", "Mark Twain"],
        correctAnswer: "Herman Melville",
    },{
        question: "The Shining was written by which author?",
        answers:["J.K. Rowling","Stephen King","R.L. Stein","J.R.R Tolkein"],
        correctAnswer:"Stephen King",
    },{
        question: "What letter follows iota in the Greek alphabet?",
        answers:["Theta","Omega","Lambda","Kappa"],
        correctAnswer:"Kappa",
    },{
        question: "What is the term for a nine sided object?",
        answers:["Decagon","Nonagon","Septagon","Octagon"],
        correctAnswer:"Nonagon",
    },{
        question: "What is the smallest island country?",
        answers:["Palau","Tuvalu","Nauru","Malta"],
        correctAnswer:"Nauru",
    },{
        question: "Halloween is in which month?",
        answers:["September","October","January","November"],
        correctAnswer:"October",
    },{
        question: "Michael Jordan played for which team?",
        answers:["Warriors","Spurs","Jazz","Bulls"],
        correctAnswer:"Bulls",
    },];
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
            solutions.html(questions[questionsAnswered].answers[i]).attr("id", "check").attr("data-value", questions[questionsAnswered].answers[i]);
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
            var lineBreak = ("<br>");
            $(".game").append(lineBreak);

        }
    }
    function correct() {
        $(".game").empty();
        var youAreRight = $("<h2>");
        youAreRight.text("CORRECT");
        $(".game").append(youAreRight);
        var dog = $("<img>");
        dog.attr("src","https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg");
        $(".game").append(dog);
        newRound()
    }
    function incorrect(){
        $(".game").empty();
        var youAreWrong = $("<h2>");
        youAreWrong.text("INCORRECT");
        $(".game").append(youAreWrong);
        var cat = $("<img>");
        cat.attr("src","https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg");
        $(".game").append(cat);
        newRound()
    }
    function ranOutOfTime(){
        $(".game").empty();
        var timeOut = $("<h2>");
        timeOut.text("OUT OF TIME");
        $(".game").append(timeOut);
        var cat = $("<img>");
        cat.attr("src","https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg");
        $(".game").append(cat);
        unanswered++
        newRound()
    }
    function start() {
        game()
    }
    function countdown() {
        timer = 30
        var time = $("<p>");
        time.addClass("timer").text("Time Remaining: " + timer);
        time.attr("id","timeCounter");
        $(".space").empty();
        $(".space").append(time);
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
        stats.html("Correct Answers: " + correctA + "<br>" + "Incorrect Answers: " + incorrectA + "<br>" + "Unanswered Questions: " + unanswered);
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




