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

  $('main > *').draggable();

  $('main > *').on('mousemove', function(event) {
    // event.stopPropagation();
  });

  $('main > *').on('mousedown', function(event) {
    event.stopPropagation();
  });

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

function randomizePosition(target, parentSelector) {
  const parent = target.closest(parentSelector);
  const offset = 700;
  const spaceWidth = document.body.offsetHeight - parseInt(parent.clientHeight) - offset;
  const spaceHeight = document.body.offsetWidth - parseInt(parent.clientWidth) - offset;
  parent.style.top = Math.round(Math.random() * spaceWidth) + 'px';
  parent.style.left = Math.round(Math.random() * spaceHeight) + 'px';
}

function asciiDancer () {
  // TODO
}

function asciiArtFetcher () {
  // TODO
}