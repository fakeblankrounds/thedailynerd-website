//Calendar js
 $(document).ready(function(){
	$(".CalWidget > div").toggle(
	function(){
		$(this).siblings().hide('fast');
		//$(this).show('fast');
		$(this).animate({
		height:"13em"
		},500);
		$(this).addClass("Border");
		$(this).children(".time").css("visibility","visible");
		$(this).children(".headline").hide('fast');
		$(this).children(".time").show('fast');
		
	},
	function(){
		$(this).siblings().show('fast');
		$(this).animate({
		height:"23%"
		},500);
		$(this).removeClass("Border");
		$(this).children(".headline").show('fast');
		$(this).children(".time").hide('fast');
		
	});
	
	
});