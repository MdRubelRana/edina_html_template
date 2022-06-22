$(document).ready(function () {
	var owl = $(".my_carousel");
	owl.owlCarousel({
		autoplay: true,
		lazyLoad: true,
		loop: true,
		margin: 30,
		responsiveClass: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 600,
		nav: false,
		responsive: {
			0: {
				items: 1
			},

			600: {
				items: 2
			},

			1024: {
				items: 3
			},

			1366: {
				items: 3
			}
		}
	});



	$('.next_button').click(function () {
		owl.trigger('next.owl.carousel');
	});
	$('.prev_button').click(function () {
		owl.trigger('prev.owl.carousel');
	});
});



// Testimonials Carousel
$(document).ready(function () {
	$(".testimonial__carousel").owlCarousel({
		autoplay: true,
		lazyLoad: true,
		loop: true,
		margin: 30,
		responsiveClass: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 600,
		nav: false,
		responsive: {
			0: {
				items: 1
			},

			600: {
				items: 2
			},

			1024: {
				items: 2
			}
		}
	});

});

