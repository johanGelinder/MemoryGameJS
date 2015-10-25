var difficulty = 0;
var array = new Array();
var card = [["owl", "duck", "deer"], ["owl", "fox","deer", "A", "B"], ["owl", "fox", "deer", "A", "B", "C"]];

var transition = false;
var timePassed = 1000;
var selection1 = null;
var selection2 = null;
var objSelection1 = null;
var objSelection2 = null;
var selectionCount = false;
var finalCount = 0;

function flipObject(_id,_uID)
{
	this.flipped = false;
	this.id = _id;
	this.uniqueId = _uID;
}


for (var i = 0; i < card[0].length; i++)
{
	for(var j=0;j<2;j++)
	{
		array.push(new flipObject(card[0][i],i+j));
	}
}

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
            //click.play(); // play the click sounds
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
    console.log("Entered Click");
	if(!selectionCount)
	{
		console.log("1st State");
		 for(var i = 0; i < array.length; i++){
		 	if(el.id == array[i].id && !array[i].flipped)
		 	{
		 		array[i].flipped = true;
		 		selection1 = el;
		 		objSelection1 = array[i];
		 		selectionCount=true;
		 		console.log(selection1.id,objSelection1);
		 		break;
		 	}
		 }
	}
	else
	{
		console.log(el.id);
		console.log("2nd State");
		for(var i = 0; i < array.length; i++){
		 	if(el.id == array[i].id )
		 	{
		 		selection2 = el;
		 		objSelection2 = array[i];
		 		console.log(objSelection2);
		 		break;
		 	}
		 }
		 if(objSelection2 != null)
		 {
			if(objSelection1.id == objSelection2.id && objSelection1.uniqueId != objSelection2.uniqueId)
	        {
	        	console.log("2nd State Accepted");
	            finalCount ++;
	            console.log(finalCount);
	    	}
	    	else
	    	{
	    		console.log("2nd State Denied");
	    		setTimeout(function(){
                      flipBack(selection1);  // else flip back to zero after timePassed (1sec)
                      flipBack(selection2);
                      //flipback.play(); // plays the flipback sound
                }, timePassed);

                objSelection1.flipped = false;	    
	    	}
	    }
	    	selectionCount=false;
	    	selection1=null;
	    	objSelection1=null;
	    	objSelection2=null;
	    if(finalCount==card.length)
	    {
	    	$("#winmenu").fadeIn("slow");
	    }
	}
}