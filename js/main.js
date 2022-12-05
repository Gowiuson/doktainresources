$(document).ready(function() {
    new WOW().init();
		$(".desktop-carousel.owl-carousel").owlCarousel({
	  	items: 0,
	  	margin: 30,
	  	loop: true,
	  	nav: false,
	  	dots: true,
	  	autoplay: true,
	  	autoplayTimeout: 5000,
	  	responsive:{
	        
	        1200:{
					items:1,
				
	        }
	    }
  	});
  	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	$('.counter').counterUp({
    	delay: 30,
	    time: 1000
	});
	
});

  
// hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () =>{
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))


