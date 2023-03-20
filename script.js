var sqr0 = document.getElementById("sqr0");
var sqr1 = document.getElementById("sqr1");
var sqr2 = document.getElementById("sqr2");

var sqr3 = document.getElementById("sqr3");
var sqr4 = document.getElementById("sqr4");
var sqr5 = document.getElementById("sqr5");

var sqr6 = document.getElementById("sqr6");
var sqr7 = document.getElementById("sqr7");
var sqr8 = document.getElementById("sqr8");


sqr0.addEventListener("click", function() { choose(0); } );
sqr1.addEventListener("click", function() { choose(1); } );
sqr2.addEventListener("click", function() { choose(2); } );

sqr3.addEventListener("click", function() { choose(3); } );
sqr4.addEventListener("click", function() { choose(4); } );
sqr5.addEventListener("click", function() { choose(5); } );

sqr6.addEventListener("click", function() { choose(6); } );
sqr7.addEventListener("click", function() { choose(7); } );
sqr8.addEventListener("click", function() { choose(8); } );

var changer = false;
var krzyzyk = "<div class=\"krzyzyk\"><hr id=\"poziom\"><hr id=\"pion\"></div>";
var kolko = "<div class=\"kolko\"></div>";
var counter = 0;

function choose(nr){
    if(changer == false){
        document.getElementById("sqr" + nr).innerHTML =kolko;
        $("#sqr"+nr).css("cursor", "default");
        $("#sqr"+nr).css("font-size", "1px");
        changer = true;
        counter++;
    }
    else{
        document.getElementById("sqr" + nr).innerHTML = krzyzyk;
        $("#sqr"+nr).css("cursor", "default");
        $("#sqr"+nr).css("font-size", "2px");
        changer = false;
        counter++;
    }

    setTimeout(function() { check() });
}

function check(){
    var ch0 = $("#sqr0").css("font-size");
    var ch1 = $("#sqr1").css("font-size");
    var ch2 = $("#sqr2").css("font-size");

    var ch3 = $("#sqr3").css("font-size");
    var ch4 = $("#sqr4").css("font-size");
    var ch5 = $("#sqr5").css("font-size");

    var ch6 = $("#sqr6").css("font-size");
    var ch7 = $("#sqr7").css("font-size");
    var ch8 = $("#sqr8").css("font-size");

    ///kolko
    var kowin = "<div id=\"kowin\">O Wins, <br/>Gratulations!<br/> Want to play again?</div>";
    var kowin2 = "<div id=\"kowin2\"><a href=\"index.html\">Play again!</a></div>";
    var xwin = "<div id=\"kowin\">X Wins, <br/>Gratulations!<br/> Want to play again?</div>";
    var draw ="<div id=\"draw\">It's draw!<br/> Better luck next time.<br/> Want to play again?</div>";
    if((ch0 == "1px") && (ch3 == "1px") && (ch6 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
    }
    else if((ch1 == "1px") && (ch4 == "1px") && (ch7 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
    }
    else if((ch2 == "1px") && (ch5 == "1px") && (ch8 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
    }



    else if((ch0 == "1px") && (ch1 == "1px") && (ch2 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
    }
    else if((ch3 == "1px") && (ch4 == "1px") && (ch5 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
    }
    else if((ch6 == "1px") && (ch7 == "1px") && (ch8 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
    }


    else if((ch0 == "1px") && (ch4 == "1px") && (ch8 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
    }
    else if((ch2 == "1px") && (ch4 == "1px") && (ch6 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
    }

    ///krzyzyk


    if((ch0 == "2px") && (ch3 == "2px") && (ch6 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
    }
    else if((ch1 == "2px") && (ch4 == "2px") && (ch7 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
    }
    else if((ch2 == "2px") && (ch5 == "2px") && (ch8 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
    }



    else if((ch0 == "2px") && (ch1 == "2px") && (ch2 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
    }
    else if((ch3 == "2px") && (ch4 == "2px") && (ch5 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
    }
    else if((ch6 == "2px") && (ch7 == "2px") && (ch8 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
    }


    else if((ch0 == "2px") && (ch4 == "2px") && (ch8 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
    }
    else if((ch2 == "2px") && (ch4 == "2px") && (ch6 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
    }
    else if(counter == "9"){
        document.getElementById("main").innerHTML = draw + kowin2;
    }
    setTimeout(function() { cancel() });
}

function cancel(){
    var ch0 = $("#sqr0").css("font-size");
    var ch1 = $("#sqr1").css("font-size");
    var ch2 = $("#sqr2").css("font-size");

    var ch3 = $("#sqr3").css("font-size");
    var ch4 = $("#sqr4").css("font-size");
    var ch5 = $("#sqr5").css("font-size");

    var ch6 = $("#sqr6").css("font-size");
    var ch7 = $("#sqr7").css("font-size");
    var ch8 = $("#sqr8").css("font-size");

    if(ch0 == "1px" || ch0 == "2px"){
        console.log("wad")
    }

}