$(document).ready(function(){

	$(window).bind('scroll', function(e){
		parallaxScroll();
	});
		function parallaxScroll(){
			var scrolledY = $(window).scrollTop();
			$('.pretty').css('top', '-'+((scrolledY+0.5))+'px');
			$('.john').css('left', '-'+((scrolledY+0.8))+'px');
			$('.name').css('top', '-'+((scrolledY+0.3))+'px');
		}
			console.log("hi");


		
});

