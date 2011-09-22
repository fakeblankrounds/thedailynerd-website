//pon slider js
$(document).ready(function(){
	var clickX;
	var clicked = false;
	$(".ponSlidePtr").mousedown(function(e)
	{	
		clickX = e.pageX;
		clicked = true;
	});
	$(".ponSlidePtr").mouseup(function(e)
	{	
		clicked = false;
	});
	$(".ponSlidePtr").mousemove(function (e){
	if(clicked){
		clickD = e.pageX - clickX;
		var pos = parseInt($(".ponSlidePtr").css("left"));
		$(".ponSlidePtr").css("left", clickD + pos);
		clickX = e.pageX;
	}
	});

});
