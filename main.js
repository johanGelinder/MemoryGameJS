var transition = false;
var timePassed = 1000;
var selection1 = null;
var selection2 = null; 
var selectionCount = 0;
var finalCount = 0;
var sound = new Audio("sounds/win_sting2.mp3"); // buffers automatically when created
var flipback = new Audio("sounds/flip2.mp3");
var click = new Audio("sounds/flip.mp3");
var win = new Audio("sounds/win_sting.mp3");
var music = new Audio("sounds/Yoshi.mp3");

  
$(music).bind('ended', function()  { // loops the background
    music.currentTime = 0;
    music.play();
});
 music.play();
 //plays the background music
 //shuffle images randomly every time

 $ ("button").click(function(){
  music.stop();
 });

$(function () {        
    var parent = $("#shuffle");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});
// the flipFront function flips the cards to the front
function flipFront(el){
            el.children[1].style.webkitTransform = "perspective(600px) rotateY(-180deg)";
            el.children[0].style.webkitTransform = "perspective(600px) rotateY(0deg)";
            el.children[1].style.transition = "all .5s linear 0s";
            el.children[0].style.transition = "all .5s linear 0s";
            el.children[1].style.transform = "perspective(600px) rotateY(-180deg)";
            el.children[0].style.transform = "perspective(600px) rotateY(0deg)";
            el.children[1].style.webkitTransition = "all .5s linear 0s";
            el.children[0].style.webkitTransition = "all .5s linear 0s";
            click.play(); // play the click sounds
}
// the flipback function flips the cards to the back
function flipBack(el) {
            el.children[1].style.webkitTransform = "perspective(600px) rotateY(0deg)";
            el.children[0].style.webkitTransform = "perspective(600px) rotateY(180deg)";
            el.children[1].style.transition = "all .5s linear 0s";
            el.children[0].style.transition = "all .5s linear 0s";
            el.children[1].style.transform = "perspective(600px) rotateY(0deg)";
            el.children[0].style.transform = "perspective(600px) rotateY(180deg)";
            el.children[1].style.webkitTransition = "all .5s linear 0s";
            el.children[0].style.webkitTransition = "all .5s linear 0s";

}
// onClick event, calls the flipit function
function flipit(el) {
      // if transition back to inital state is active, then exit
      if(transition == false){
            flipFront(el);
            // for every click selectionCount + 1
            selectionCount ++;
            if( selectionCount == 1) { 
                  selection1 = el; // store slection object
            } 
            else if ( selectionCount == 2) { 
                  selection2 = el; // store slection object
                  
                  if(selection1.id == selection2.id) {
                    sound.play();// if slection1 and 2 is a match (audio will play!)
                    finalCount ++;
                  } else {
                  
                        setTimeout(function(){
                              flipBack(selection1);  // else flip back to zero after timePassed (1sec)
                              flipBack(selection2);
                              flipback.play(); // plays the flipback sound
                        }, timePassed);
                        
                           
                  }
                  transition = true;
                  setTimeout(function(){ 
                              // clearing the selection
                        transition = false;
                        selection1 = null;      
                        selection2 = null;
                        selectionCount = 0;
                  }, timePassed);

                  if( finalCount == 3){
                    win.play();
                    //alert("you win!!");
                    $("#winmenu").fadeIn("slow");
                  }

            }     
      }





}