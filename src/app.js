const portfolio = {};
portfolio.previousNums = [];
portfolio.events = function() {
	$('.seeMore__skills').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.otherSkills').slideToggle('slow');
	});
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	$('nav button').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('nav ul').slideToggle('fast');
	});
}


portfolio.init = function() {
	
	$('.otherSkills').hide();
}

$(function() {
	portfolio.init();
	portfolio.events();
});
