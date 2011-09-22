//some globals
var width = window.innerWidth;
var height = window.innerHeight;
var canvas;
var context;

var fillColor = "rgba(0,0,255,1)";

var j = 0;
var k = 0;
var vinedir = 'up';

var then = Date.now();

var shouldUpdate = true;


var render = function () {
        //myvine.drawColor(context, fillColor);
    }

var vineDone = function () {
        if (vinedir == 'up') vinedir = 'down';
        else vinedir = 'up';
        myvine = new branch(vineDone, vinedir);
    }
var myvine = new branch(vineDone, 'up');
var update = function (modifier) {
        //if(shouldUpdate)
        //	myvine.grow();
        myvine.step(context, fillColor);
        //context.fillStyle = '#f00';
        //context.fillRect(j,1,1,1);
        //context.fillStyle = '#0f0';
        //context.fillRect(j,k,1,1);
        //j++;
        //k++;
    }

var main = function () {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1000);
        render();

        then = now;
    }

//Make canvas
window.onload = function () {
    canvas = document.getElementById("bgCanvas");
    context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    setInterval(main, 1);
    // translate context to center of canvas
    context.translate(canvas.width / 2, 0);
    // rotate 45 degrees clockwise
    context.rotate(Math.PI / 4);
    context.scale(1 / Math.sqrt(2), 1 / Math.sqrt(2));
}
window.onresize = function(event)
{
	width = window.innerWidth;
	height = window.innerHeight;
}