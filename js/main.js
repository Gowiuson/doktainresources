$(document).ready(function() {
    new WOW().init();

	$(".items.owl-carousel").owlCarousel({
	  	items: 4,
	  	margin: 30,
	  	loop: true,
	  	nav: false,
	  	dots: false,
	  	autoplay: true,
	  	autoplayTimeout: 5000,
	  	responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1200:{
				items:4,
				nav:true,
	            loop:false
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
const about_toggle =document.getElementById('about-toggle');
const more = document.getElementById('more');
    
more.addEventListener('click', ()=>{
  about_toggle.classList.toggle('active');
})
  
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


