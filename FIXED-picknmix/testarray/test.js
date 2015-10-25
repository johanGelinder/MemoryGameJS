var difficulty = 0;
var array = new Array();
var card = [["owl", "duck", "deer"], ["owl", "fox","deer", "A", "B"], ["owl", "fox", "deer", "A", "B", "C"]];
console.log("1");
function flipObject(_id)
{
	this.flipped = false;
	this.id = _id;
}
console.log("2");
// 	function fillArray(diff)
// 	{
// difficulty = diff;

for (var i = 0; i < 2; i++);
{
	console.log(card[0][i]);
	console.log(i);
	//console.log(card[0].length);
	for(var j = 0; j < 2; j++)
	{
		array.push(new flipObject(card[0][i]));
		console.log("4");
	}	
}
// }

var transition = false;
var timePassed = 1000;
var selection1 = null;
var selectionCount = false;
var finalCount = 0;


//shuffle images randomly every time
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
  // on tap event
$(".flip3Dclick").on("tap" , function(e){

    flipit(e.currentTarget); 

  });

// onClick event, calls the flipit function
function flipit(el) {
    flipFront(el);
    console.log("1");
	if(!selectionCount)
	{ 
		 for(var i = 0; i < array.length; i++){
		 	if(el.id == array[i].id && !array[i].flipped)
		 	{
		 		array[i].flipped = true;
		 		selection1 = el;
		 		selectionCount ++;
		 		selectionCount=true;
		 		break;
		 	}
		 }
	}
	else
	{
		for(var i = 0; i < array.length; i++){
			if(selection1.id == array[i] && !array[i].flipped)
	        {
	            finalCount ++;
	    	}
	    	else
	    	{
	    		setTimeout(function(){
                      flipBack(selection1);  // else flip back to zero after timePassed (1sec)
                      flipBack(el);
                      //flipback.play(); // plays the flipback sound
                }, timePassed);
	    	}
	    	selectionCount=false;
	    	selection1=null;
	    }
	    if(finalCount==id.length)
	    {
	    	$("#winmenu").fadeIn("slow");
	    }
	}	


      // if transition back to inital state is active, then exit
      // if(transition == false){
      //       flipFront(el);
      //       console.log(transition);
          
           
      //       if( selectionCount == 1) { 
      //       	if(selection1.id == array[i] && !array[i].flipped)
      //       	{
      //       		finalCount ++;
      //       	}
      //             selection1 = el; // store slection object
      //             console.log(selectionCount);
      //       } 
      //       else if ( selectionCount == 2) { 
      //             selection2 = el; // store slection object
                  
      //             if(selection1.id == selection2.id) {
      //               // if slection1 and 2 is a match (audio will play!)
      //               console.log(selectionCount);
                   
      //             } else {
                  
      //                   setTimeout(function(){
      //                         flipBack(selection1);  // else flip back to zero after timePassed (1sec)
      //                         flipBack(selection2);
      //                         flipback.play(); // plays the flipback sound
      //                   }, timePassed);
                        
                           
      //             }
      //             transition = true;
      //             setTimeout(function(){ 
      //                         // clearing the selection
      //                   transition = false;
      //                   selection1 = null;      
      //                   selection2 = null;
      //                   selectionCount = 0;
      //             }, timePassed);

      //             if( finalCount == 3){
                    
      //               //alert("you win!!");
      //               $("#winmenu").fadeIn("slow");
      //             }

      //       }     
      // }





}