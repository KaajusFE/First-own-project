let sqr = document.getElementsByClassName("square");
for(let i = 0; i<9; i++)(
    sqr[i].addEventListener("click", function(){ choose(i);})
)


var changer = false;
var krzyzyk = "<div class=\"krzyzyk\"><hr id=\"poziom\"><hr id=\"pion\"></div>";
var kolko = "<div class=\"kolko\"></div>";
var counter = 0;

function choose(nr){
    var clickchecker = $("#sqr" + nr).css("font-size");
    if(clickchecker == "16px"){
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
    var wining = false;
    if((ch0 == "1px") && (ch3 == "1px") && (ch6 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }
    else if((ch1 == "1px") && (ch4 == "1px") && (ch7 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }
    else if((ch2 == "1px") && (ch5 == "1px") && (ch8 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }



    else if((ch0 == "1px") && (ch1 == "1px") && (ch2 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }
    else if((ch3 == "1px") && (ch4 == "1px") && (ch5 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }
    else if((ch6 == "1px") && (ch7 == "1px") && (ch8 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }


    else if((ch0 == "1px") && (ch4 == "1px") && (ch8 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }
    else if((ch2 == "1px") && (ch4 == "1px") && (ch6 == "1px")){
        document.getElementById("main").innerHTML = kowin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }

    ///krzyzyk


    else if((ch0 == "2px") && (ch3 == "2px") && (ch6 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }
    else if((ch1 == "2px") && (ch4 == "2px") && (ch7 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }
    else if((ch2 == "2px") && (ch5 == "2px") && (ch8 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }



    else if((ch0 == "2px") && (ch1 == "2px") && (ch2 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }
    else if((ch3 == "2px") && (ch4 == "2px") && (ch5 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }
    else if((ch6 == "2px") && (ch7 == "2px") && (ch8 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }


    else if((ch0 == "2px") && (ch4 == "2px") && (ch8 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }
    else if((ch2 == "2px") && (ch4 == "2px") && (ch6 == "2px")){
        document.getElementById("main").innerHTML = xwin + kowin2;
        $("#main").css("border","solid 5px gold");
        wining = true;
    }
    else if((counter == "9") && (wining == "false")){
        document.getElementById("main").innerHTML = draw + kowin2;
        $("#main").css("border","solid 5px gold");
    }
}

