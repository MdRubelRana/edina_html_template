$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
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

});