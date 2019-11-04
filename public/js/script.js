$(document).ready(function() {
	// add background to navbar & remove border
	var $navbar = $('#navbar');
	// style navbar based on position
	function navbarStyle() {
		if($(window).scrollTop() > 0) {
			$navbar.removeClass('border-bottom border-info');
			$navbar.addClass('bg-dark');
		} else {
			$navbar.addClass('border-bottom border-info');
			$navbar.removeClass('bg-dark');
		}
	}
	navbarStyle();
	// window on scroll event
	$(window).scroll(function() {
		navbarStyle();
	});
	// toggler on & off
	$('#navbar-toggler').click(function() {
		if($(window).scrollTop() === 0) {
			$navbar.toggleClass('bg-dark border-bottom border-info');
		}
	});
	// buy now link hover state
	$('#buy-now-link').hover(
		function() {
			$(this).addClass('bg-info text-light');
		},
		function() {
			$(this).removeClass('bg-info text-light');
		}
	);
	// resize headings based on window width
	function resizeHeading() {
		var $mainHeading = $('#main-heading');
		if( $(window).width() < 576 ) {
			$mainHeading.removeClass('display-2 display-3');
			$mainHeading.addClass('display-4');
		}
		if( $(window).width() > 576 && $(window).width() < 768 ) {
			$mainHeading.removeClass('display-2 display-4');
			$mainHeading.addClass('display-3');
		}
		if( $(window).width() >= 768) {
			$mainHeading.removeClass('display-3 display-4');
			$mainHeading.addClass('display-2');
		}
	}
	resizeHeading();
	// window resize event
	$(window).resize(function() {
		resizeHeading();
	});
	// AOS init
	AOS.init();
	// explore hover opacity
	$('#explore-models').hover(
		function() {
			$(this).css('opacity', 0.7);
		},
		function() {
			$(this).css('opacity', 1);
		}
	);
	// faq open & close
	$('.faq-trigger').click(function() {
		$(this).children().first().toggleClass('purple-text');
		$(this).children().eq(1).children().first().toggleClass('fa-caret-down fa-caret-up');
	});
	// subscribe form validate
	$('#subscribe-send').click(function(e) {
		e.preventDefault();
		if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($('#subscribe-email').val())) {
			var hide;
			$('#pop-up').addClass(function() {
				var $popUp = $('#pop-up');
				// show pop up
				$popUp.addClass('pop-up-in');
				setTimeout(function() {
					$popUp.addClass('pop-up-show');
				}, 10);
				// animate pop up
				setTimeout(function() {
					$popUp.addClass('shake');
				}, 410);
				// auto hide pop up
				hide = setTimeout(function() {
					$popUp.removeClass('pop-up-in pop-up-show shake');
				}, 10000);
			});
			// clear input
			$('#subscribe-email').val('');
			// remove invalid message
			$('#subscribe-invalid').hide();
		} else {
			// show invalid message
			$('#subscribe-invalid').show('slow');
		}
	});
	// manually close pop up
	$('#pop-up-close').click(function() {
			$('#pop-up').removeClass('pop-up-in pop-up-show shake');
			clearTimeout(hide);
		});

	// back to top
	$('.back-to-top').click(function(e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 1200,);
	});
});