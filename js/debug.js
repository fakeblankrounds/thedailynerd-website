 $(document).ready(function(){
 
	

   var overlayShowing = false;
   $("#settings").toggle(function(){
		$("#settingsOverlay").animate({ 
            height: "100%", 
            width: "60em", 
        }, 1000); 
		
		$("#settings").animate({
			right:"285%"
		},1000);
		$("#settingsOverlay").children().show('fast');
	},function(){
		$("#settingsOverlay").animate({ 
			height: "100%", 
            width: "0em", 
        }, 1000); 
		
		$("#settings").animate({
			right:"-13%"	
		},1000);
		
		$("#settingsOverlay").children().hide('fast');
		overlayShowing = !overlayShowing;
   });
   
  $("#settings").mouseenter(function() {
		$("#settingsText").show('fast');
	}).mouseleave(function() {
	$("#settingsText").hide('fast');
  });
  
  $("#settingsText").hide('fast');
  $("#settingsOverlay").children().hide('fast');
  
  $switchToggle = function(state, id){
		
  }
  //calWidget
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
		height:"25%"
		},500);
		$(this).removeClass("Border");
		$(this).children(".headline").show('fast');
		$(this).children(".time").hide('fast');
		
	});
	
	
  
 });
