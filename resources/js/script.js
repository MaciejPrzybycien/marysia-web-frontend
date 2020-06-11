$(document).ready(function() {
	
	/*Sticky navigation*/
	$('#js--section-features').waypoint(
		function(direction){
			if (direction == "down") {
				$('nav').addClass('sticky');
			} else {
				$('nav').removeClass('sticky');
			}
		},
		{
			offset:'10%'
		}
	);
	/*Scroll on buttons*/
	$('.js--scroll-to-section-why-us').click (function(){
		$('html, body').animate({scrollTop: $('#js--section-features').offset().top}, 1000);
		
	});
	
	$('.js--scroll-to-section-hire-us').click (function(){
		$('html, body').animate({scrollTop: $('.js--we-are-ready').offset().top}, 1000);
		
	});
	$('.js--scroll-to-section-about-us').click (function(){
		$('html, body').animate({scrollTop: $('.js--about-us').offset().top}, 1000);
		
	});
	
	/*Animation on scroll*/
	
	$('.js--wp-animation-trigger').waypoint(function(direction){
		$('.macius--animate-content').addClass('animate__animated');
	})
	
});
	