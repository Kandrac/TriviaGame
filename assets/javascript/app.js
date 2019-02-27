

var correctAnswers = 0;
var wrongAnswers = 0;
var ActualTime = 60;

var questionsObj = [

{   ask: "What is Andy Dwyer's alter ego?",
    answer: "Both A and B",
    As: ["Johnny Karate","Burt Macklin","Duke Silver","Both A and B"],
    questionNumber: "firstAnswer"
},

{   ask: "What is the board game Ben Wyatt created ?",
    answer: "The Cones of Dunshire",
    As: ["Settlers of Catan","Chardee Macdennis","The Cones of Dunshire","Beer Die"],
    questionNumber: "secondAnswer"

},

{   ask: "What is Chris Traegers favorite word?",
    answer: "Literally",
    As: ["Sweet","Literally","Awesome", "Cowabunga"],
    questionNumber: "thirdAnswer"
 },

{   ask: "How many wives has Ron Swanson had?",
    answer: "3",
    As: ["3","4","2", "1"],
    questionNumber: "fourthAnswer"
},

{   ask: "Which is not a Pawnee buissness?",
    answer: "Jean Ralphios ",
    As: ["Sweetums","Paunch Burger","Jean Ralphios ", "Rent-a-Swag"],
    questionNumber: "fifthAnswer"
},

{   ask: "What animal is Li'l Sebastian?",
    answer:"mini horse",
    As: ["dog","mini horse","cat","donkey"],
    questionNumber: "sixthAnswer"
},

{   ask: "What is Ann Perkins profession?",
    answer: "Nurse",
    As: ["Nurse","Council member","Radio host", "Real estate agent"],
    questionNumber: "seventhAnswer"
}

];

function timer() {
    intervalID = setInterval(decrement, 1000)
    function decrement() {
        ActualTime--;
        $(".timer").text("You have "+ ActualTime + " seconds to prove your Parks and Recreation knowledge");

        if (ActualTime <= 0) {
            checkAnswers();
        }
    
    }
    
    
}

function startButton() {
    var startDiv = $("<button class='start'>");
    startDiv.text("START");
    $(".questions").append(startDiv);   
}

function openTriva() {
    timer();
    for (var i = 0; i < questionsObj.length; i++) {
    
    
    var fieldSET = $("<fieldset>"); 
    var creatClass = $("<div class='question'>");
    var labelTag = $("<label>");

    $(".title").text("How Well Do You Know Parks and Recreation ");
    creatClass.text(questionsObj[i].ask);
    for (let j = 0; j < questionsObj[i].As.length; j++) {
        var inputTag = $("<br>"+"<input class='radioButton' name='"+questionsObj[i].questionNumber+"' type='radio' value='" + questionsObj[i].As[j]+"'>");
        labelTag.append(inputTag);
        labelTag.append(questionsObj[i].As[j]); 
        fieldSET.append(labelTag);
        creatClass.append(fieldSET);
    }
    $(".questions").append(creatClass);
    };


};




function checkAnswers() {
   
$.each($("input[name='firstAnswer']:checked"), function () {
    if ($(this).val() === questionsObj[0].answer) {
        correctAnswers++;
    }
    else {
        wrongAnswers++;
    }


})

    $.each($("input[name='secondAnswer']:checked"), function () {
        if ($(this).val() === questionsObj[1].answer) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }

    })

    $.each($("input[name='thirdAnswer']:checked"), function () {
        if ($(this).val() === questionsObj[2].answer) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }

    })

    $.each($("input[name='fourthAnswer']:checked"), function () {
        if ($(this).val() === questionsObj[3].answer) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }

    })

    $.each($("input[name='fifthAnswer']:checked"), function () {
        if ($(this).val() === questionsObj[4].answer) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }

    })

    $.each($("input[name='sixthAnswer']:checked"), function () {
        if ($(this).val() === questionsObj[5].answer) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }

    })

    $.each($("input[name='seventhAnsweren']:checked"), function () {
        if ($(this).val() === questionsObj[6].answer) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }

    })

    $(".questions").empty();
    $(".questions").append("Correct Answers: " + correctAnswers + "<br>");
    $(".questions").append("Wrong Answers: " + wrongAnswers);
    $(".questions").addClass("finished");
    $("#submit").remove();
    $(".timer").hide();
    

}

    


$(document).ready(function() {
    $("#submit").hide();
    startButton();
    $(".start").on("click", function() {
        $(".questions").empty();
        $("#submit").show();
        openTriva();  
    })

    $("#submit").on("click", checkAnswers)
    

    


    

    

});

