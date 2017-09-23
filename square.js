					
var canvasSQ= document.querySelector('#whiteRoom');
var contextSQ= canvasSQ.getContext('2d');

//Object example
//position of the object
var xPos=0;
var yPos=0;

contextSQ.rect(xPos,yPos,50,50);
contextSQ.strokeStyle = "#FF0000";
contextSQ.stroke();
			
function move(e){

				
	//alert(e.keyCode);


	if(e.keyCode==39){ xPos+=10};
	if(e.keyCode==37){ xPos-=10};
	if(e.keyCode==38){ yPos-=10};
	if(e.keyCode==40){ yPos+=10};
				



	canvasSQ.width=canvasSQ.width;
	contextSQ.rect(xPos,yPos,50,50);
	contextSQ.strokeStyle = "#FF0000";
	contextSQ.stroke();


}


document.onkeydown= move;
			
