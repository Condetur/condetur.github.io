/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

	});

})(jQuery);

$('#form').on('submit', function(e) {
	e.preventDefault();

	name = $('.name').val();
	email = $('.email').val();
	body = $('.message').val();

	if (name.length < 1 || email.length < 1 || body.length < 1) {
		// Missing info
	} else {
		sendForm(name, email, body)
	}
});

function sendForm(name, email, body) {
	$.ajax({
		type: 'POST',
		url: '/email',
		data: {
			name: name,
			email: email,
			body: body
		},
		success: function(res) {
			// Succesful
		},
		error: function(res) {
			// Error
		}
	});
}