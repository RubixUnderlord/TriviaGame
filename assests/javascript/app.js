$(document).ready(function(){
    questions = [{
        question: "What is 1 + 1?",
        answers:["1","2","3","4"],
        correctAnswer: "2"
    }];
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timer = 30;


    $("#start").on("click", function(){
        start() 
    });
    $("#check").on("click",function(){
        checkifCorrect()
    });

    function start(){
        $(".game").empty();
        countdown()
        game()
    }
    function countdown(){
        var time = $("<p>");
        time.addClass("timer").text("Time Remaining: " + timer);
        $(".game").append(time);
        var questionTimer = setInterval(function(){
            timer--;
            $(".timer").text("Time Remaining: " + timer);
            if (timer <= 0) clearInterval(questionTimer);
        },1000);
    }
    function game(){
        var problem = $("<h2>");
        problem.text(questions[0].question);
        $(".game").append(problem);
        for (i = 0 ; i < questions[0].answers.length;i++) {
            var solutions = $("<button>");
            solutions.text(questions[0].answers[i]).attr("id","check").attr("data-value",questions[0].answers[i]);
            $(".game").append(solutions);
        }
        
    }
    function checkifCorrect(){
        if($(this) === questions[0].correctAnswer){
            console.log("you got it");
        }else{
            console.log("damn");
        }
    }
});




