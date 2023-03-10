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
var kolko = "<div class=\"kolko\"></div>"
function choose(nr){

    if(changer == false){
        document.getElementById("sqr" + nr).innerHTML = kolko;
        changer = true;
    }
    else{
        document.getElementById("sqr" + nr).innerHTML = krzyzyk;
        changer = false;
    }


}