$(document).ready(function() {
	try {
		$('body').ripples({
			resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04,
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}

	$('.js-ripples-disable').on('click', function() {
		$('body, main').ripples('destroy');
		$(this).hide();
	});

	$('.js-ripples-play').on('click', function() {
		$('body, main').ripples('play');
	});

	$('.js-ripples-pause').on('click', function() {
		$('body, main').ripples('pause');
	});

});
