//Calendar js
var $switchToggle = function(position, id){

};
 $(document).ready(function(){
	$(".switch").toggle(
	function(){
		$(this).animate({
			left:"50%"
		},500);
		$(".color2").animate({
			width:"0"
		},500);
		$(".color1").animate({
			width:"100%"
		},500);
		//$(".ponbutton").addClass("color1");
		//$(".ponbutton").removeClass("color2");
		$switchToggle('on', $(this).parent().attr('id'));
		
	},
	function(){
		$(this).animate({
			left:"2px"
		},500);
		$(".color1").animate({
			width:"0"
		},500);
		$(".color2").animate({
			width:"100%"
		},500);
		//$(".ponbutton").addClass("color2");
		//$(".ponbutton").removeClass("color1");
		$switchToggle('off',$(this).parent().attr('id'));
		
	});
	
	
});