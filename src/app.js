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
}

portfolio.possibleIconArray = [
	'devicon-jquery-plain-wordmark',
	'devicon-javascript-plain',
	'devicon-gulp-plain',
	'devicon-github-plain',
	'devicon-git-plain-wordmark',
	'devicon-css3-plain-wordmark',
	'devicon-atom-original-wordmark',
	'devicon-html5-plain-wordmark',
	'devicon-nodejs-plain',
	'devicon-react-original-wordmark',
	'devicon-sass-original',
	'devicon-chrome-plain-wordmark'
];

portfolio.getFiveRandomNumbers = function() {
	let randoNums = [];
	for (var i = 0; randoNums.length < 5; i++) {
		let randoNum = Math.floor(Math.random() * (portfolio.possibleIconArray.length - 1 + 1)) + 0;
		let unique = true;
		randoNums.forEach((num) => {
			if (num === randoNum) unique = false })
		if (portfolio.previousNums[(randoNums.length - 1)] === randoNum) {
			unique = false;
		}
		if (unique) {
			randoNums.push(randoNum);
		}
	}

	return randoNums;
}

portfolio.skillIconTimerStart = function() {
	let hexOne = setInterval(function() {
		let hex1 = $('.hex1 p i');
		let hex2 = $('.hex2 p i');
		let hex3 = $('.hex3 p i');
		let hex4 = $('.hex4 p i');
		let hex5 = $('.hex5 p i');
		let randomNumArray = portfolio.getFiveRandomNumbers();
		portfolio.previousNums = randomNumArray;
		console.log(randomNumArray)
		randomNumArray.forEach((num, i) => {

			let currentHex = $(`.hex${i + 1} p i`);
			currentHex.fadeOut('fast', () => {
				currentHex.attr('class', '');
				currentHex.addClass(portfolio.possibleIconArray[num]);
				currentHex.addClass('skillIcon');
				currentHex.fadeIn('fast');
			})

		})


	}, 3000)
}

portfolio.init = function() {
	portfolio.skillIconTimerStart();
	$('.otherSkills').hide();
}

$(function() {
	portfolio.init();
	portfolio.events();
});
