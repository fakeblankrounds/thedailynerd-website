//some globals
var width = 512;
var height = 512;
var canvas;
var context;

var x = width/2;
var y = height/2;
var linewidth = 10;
var render = function(){
	//context.clearRect ( 0 , 0 , width , height );
	//context.strokeRect(0,0,width,height);
	
	context.strokeStyle = '#00f';
	context.fillStyle = '#00f';
	if(direction == 1)
		context.fillRect(x,y, 1,linewidth);
	else
		context.fillRect(x,y, linewidth,1);

	
}

var update = function(modifier){

	ChangeDirection();

}

var main = function(){
	var now = Date.now();
	var delta = now - then;
	
	update(delta/1000);
	render();
	
	then = now;
}
var count = 0;
var direction = 0
var add = 0;
var prevAdd = 0;
var needschange = true;
var prevDirection = 0;
var prevCount = 60;
var prevLine = 10;


var ChangeDirection = function(){
	if(count <= 0 || needschange){
		count = Math.random() * 90;
		if(count < prevCount - 25)
			count = prevCount-25;
		else if(count > prevCount + 25)
			count = prevCount+25;
		prevCount = count;	
		
		linewidth = Math.random() * 10;
		if(linewidth < prevLine - 1)
			linewidth = prevLine -1;
		else if(linewidth > prevLine+1)
			linewidth = prevLine +1;
		prevLine = linewidth;
		if(Math.random() > 0.5)
		{
			direction = 1;
			if(Math.random() > 0.5)
				add = 1;
			else
				add = -1;
		}
		else
		{
			direction = 0;
			if(Math.random() > 0.5)
				add = 1;
			else
				add = -1;
			
		}
		needschange = false;
		if(prevDirection === direction && prevAdd === -add)
			needschange = true;
		else{
			prevDirection = direction;
			prevAdd = add;
		}
	}
	else
	{
		if(direction == 1)
		{
			x+=add;
			if(x > width || x < 0){
				//direction = 0;
				 if(x < 0){
					add = 1;
					x = 1;
				 }
				 else{
					add = -1;
					x = width-1;
				}
			}
		}
		if(direction == 0)
		{
			y+=add;
			if(y > height || y < 0){
				//direction = 1;
				 if(y < 0){
					add = 1;
					y = 1;
				 }
				 else{
					add = -1;
					y = height-1;
				}
			}
		}
		count--;
	}


}
var then = Date.now();
//Make canvas
window.onload = function(){
 canvas = document.getElementById("myCanvas");
 context = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

setInterval(main, 1);
  // translate context to center of canvas
    context.translate(canvas.width / 2, 0);
    // rotate 45 degrees clockwise
    context.rotate(Math.PI / 4);
	context.scale(1/Math.sqrt(2),1/Math.sqrt(2));
}