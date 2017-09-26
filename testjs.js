

var staySheet =new Image();

staySheet.src = "file:///Users/uboa/Desktop/Tesseract/1st Stage/Mikhaela/About my purpose/Js WhiteRoom/staySheet.png";
staySheet.addEventListener('load', loadImage, false);

var canvas= document.querySelector('#WhiteRoom');
var context= canvas.getContext('2d');




function loadImage(e){
	animate();
}


var indx=0;
var width=21
var height=43;

var totalFrames=8;
var currentFrame=0;


function animate(){

	context.drawImage(staySheet,indx,0,width,height,120,25,width,height);

	indx += 21;

	if(currentFrame ==totalFrames){

		indx=0;
		currentFrame = 0;

	}


	currentFrame++;

	setTimeout(animate,1000/16);

}