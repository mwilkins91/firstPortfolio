(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var portfolio = {};
portfolio.previousNums = [];
portfolio.events = function () {
	$('.seeMore__skills').on('click', function (event) {
		event.preventDefault();
		/* Act on the event */
		$('.otherSkills').slideToggle('slow');
	});
	$('a[href*="#"]:not([href="#"])').click(function () {
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
};

portfolio.possibleIconArray = ['devicon-jquery-plain-wordmark', 'devicon-javascript-plain', 'devicon-gulp-plain', 'devicon-github-plain', 'devicon-git-plain-wordmark', 'devicon-css3-plain-wordmark', 'devicon-atom-original-wordmark', 'devicon-html5-plain-wordmark', 'devicon-nodejs-plain', 'devicon-react-original-wordmark', 'devicon-sass-original', 'devicon-chrome-plain-wordmark'];

portfolio.getFiveRandomNumbers = function () {
	var randoNums = [];

	var _loop = function _loop() {
		var randoNum = Math.floor(Math.random() * (portfolio.possibleIconArray.length - 1 + 1)) + 0;
		var unique = true;
		randoNums.forEach(function (num) {
			if (num === randoNum) unique = false;
		});
		if (portfolio.previousNums[randoNums.length - 1] === randoNum) {
			unique = false;
		}
		if (unique) {
			randoNums.push(randoNum);
		}
	};

	for (var i = 0; randoNums.length < 5; i++) {
		_loop();
	}

	return randoNums;
};

portfolio.skillIconTimerStart = function () {
	var hexOne = setInterval(function () {
		var hex1 = $('.hex1 p i');
		var hex2 = $('.hex2 p i');
		var hex3 = $('.hex3 p i');
		var hex4 = $('.hex4 p i');
		var hex5 = $('.hex5 p i');
		var randomNumArray = portfolio.getFiveRandomNumbers();
		portfolio.previousNums = randomNumArray;
		console.log(randomNumArray);
		randomNumArray.forEach(function (num, i) {

			var currentHex = $('.hex' + (i + 1) + ' p i');
			currentHex.fadeOut('fast', function () {
				currentHex.attr('class', '');
				currentHex.addClass(portfolio.possibleIconArray[num]);
				currentHex.addClass('skillIcon');
				currentHex.fadeIn('fast');
			});
		});
	}, 3000);
};

portfolio.init = function () {
	portfolio.skillIconTimerStart();
	$('.otherSkills').hide();
};

$(function () {
	portfolio.init();
	portfolio.events();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBTSxZQUFZLEVBQWxCO0FBQ0EsVUFBVSxZQUFWLEdBQXlCLEVBQXpCO0FBQ0EsVUFBVSxNQUFWLEdBQW1CLFlBQVc7QUFDN0IsR0FBRSxrQkFBRixFQUFzQixFQUF0QixDQUF5QixPQUF6QixFQUFrQyxVQUFTLEtBQVQsRUFBZ0I7QUFDakQsUUFBTSxjQUFOO0FBQ0E7QUFDQSxJQUFFLGNBQUYsRUFBa0IsV0FBbEIsQ0FBOEIsTUFBOUI7QUFDQSxFQUpEO0FBS0EsR0FBRSw4QkFBRixFQUFrQyxLQUFsQyxDQUF3QyxZQUFXO0FBQ2xELE1BQUksU0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLEtBQTFCLEVBQWlDLEVBQWpDLEtBQXdDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsRUFBNkIsRUFBN0IsQ0FBeEMsSUFBNEUsU0FBUyxRQUFULElBQXFCLEtBQUssUUFBMUcsRUFBb0g7QUFDbkgsT0FBSSxTQUFTLEVBQUUsS0FBSyxJQUFQLENBQWI7QUFDQSxZQUFTLE9BQU8sTUFBUCxHQUFnQixNQUFoQixHQUF5QixFQUFFLFdBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixDQUFoQixDQUFYLEdBQWdDLEdBQWxDLENBQWxDO0FBQ0EsT0FBSSxPQUFPLE1BQVgsRUFBbUI7QUFDbEIsTUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3ZCLGdCQUFXLE9BQU8sTUFBUCxHQUFnQjtBQURKLEtBQXhCLEVBRUcsSUFGSDtBQUdBLFdBQU8sS0FBUDtBQUNBO0FBQ0Q7QUFDRCxFQVhEO0FBWUEsQ0FsQkQ7O0FBb0JBLFVBQVUsaUJBQVYsR0FBOEIsQ0FDN0IsK0JBRDZCLEVBRTdCLDBCQUY2QixFQUc3QixvQkFINkIsRUFJN0Isc0JBSjZCLEVBSzdCLDRCQUw2QixFQU03Qiw2QkFONkIsRUFPN0IsZ0NBUDZCLEVBUTdCLDhCQVI2QixFQVM3QixzQkFUNkIsRUFVN0IsaUNBVjZCLEVBVzdCLHVCQVg2QixFQVk3QiwrQkFaNkIsQ0FBOUI7O0FBZUEsVUFBVSxvQkFBVixHQUFpQyxZQUFXO0FBQzNDLEtBQUksWUFBWSxFQUFoQjs7QUFEMkM7QUFHMUMsTUFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixVQUFVLGlCQUFWLENBQTRCLE1BQTVCLEdBQXFDLENBQXJDLEdBQXlDLENBQTFELENBQVgsSUFBMkUsQ0FBMUY7QUFDQSxNQUFJLFNBQVMsSUFBYjtBQUNBLFlBQVUsT0FBVixDQUFrQixVQUFDLEdBQUQsRUFBUztBQUMxQixPQUFJLFFBQVEsUUFBWixFQUFzQixTQUFTLEtBQVQ7QUFBZ0IsR0FEdkM7QUFFQSxNQUFJLFVBQVUsWUFBVixDQUF3QixVQUFVLE1BQVYsR0FBbUIsQ0FBM0MsTUFBbUQsUUFBdkQsRUFBaUU7QUFDaEUsWUFBUyxLQUFUO0FBQ0E7QUFDRCxNQUFJLE1BQUosRUFBWTtBQUNYLGFBQVUsSUFBVixDQUFlLFFBQWY7QUFDQTtBQVp5Qzs7QUFFM0MsTUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixVQUFVLE1BQVYsR0FBbUIsQ0FBbkMsRUFBc0MsR0FBdEMsRUFBMkM7QUFBQTtBQVcxQzs7QUFFRCxRQUFPLFNBQVA7QUFDQSxDQWhCRDs7QUFrQkEsVUFBVSxtQkFBVixHQUFnQyxZQUFXO0FBQzFDLEtBQUksU0FBUyxZQUFZLFlBQVc7QUFDbkMsTUFBSSxPQUFPLEVBQUUsV0FBRixDQUFYO0FBQ0EsTUFBSSxPQUFPLEVBQUUsV0FBRixDQUFYO0FBQ0EsTUFBSSxPQUFPLEVBQUUsV0FBRixDQUFYO0FBQ0EsTUFBSSxPQUFPLEVBQUUsV0FBRixDQUFYO0FBQ0EsTUFBSSxPQUFPLEVBQUUsV0FBRixDQUFYO0FBQ0EsTUFBSSxpQkFBaUIsVUFBVSxvQkFBVixFQUFyQjtBQUNBLFlBQVUsWUFBVixHQUF5QixjQUF6QjtBQUNBLFVBQVEsR0FBUixDQUFZLGNBQVo7QUFDQSxpQkFBZSxPQUFmLENBQXVCLFVBQUMsR0FBRCxFQUFNLENBQU4sRUFBWTs7QUFFbEMsT0FBSSxhQUFhLFlBQVMsSUFBSSxDQUFiLFdBQWpCO0FBQ0EsY0FBVyxPQUFYLENBQW1CLE1BQW5CLEVBQTJCLFlBQU07QUFDaEMsZUFBVyxJQUFYLENBQWdCLE9BQWhCLEVBQXlCLEVBQXpCO0FBQ0EsZUFBVyxRQUFYLENBQW9CLFVBQVUsaUJBQVYsQ0FBNEIsR0FBNUIsQ0FBcEI7QUFDQSxlQUFXLFFBQVgsQ0FBb0IsV0FBcEI7QUFDQSxlQUFXLE1BQVgsQ0FBa0IsTUFBbEI7QUFDQSxJQUxEO0FBT0EsR0FWRDtBQWFBLEVBdEJZLEVBc0JWLElBdEJVLENBQWI7QUF1QkEsQ0F4QkQ7O0FBMEJBLFVBQVUsSUFBVixHQUFpQixZQUFXO0FBQzNCLFdBQVUsbUJBQVY7QUFDQSxHQUFFLGNBQUYsRUFBa0IsSUFBbEI7QUFDQSxDQUhEOztBQUtBLEVBQUUsWUFBVztBQUNaLFdBQVUsSUFBVjtBQUNBLFdBQVUsTUFBVjtBQUNBLENBSEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgcG9ydGZvbGlvID0ge307XHJcbnBvcnRmb2xpby5wcmV2aW91c051bXMgPSBbXTtcclxucG9ydGZvbGlvLmV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5zZWVNb3JlX19za2lsbHMnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuXHRcdCQoJy5vdGhlclNraWxscycpLnNsaWRlVG9nZ2xlKCdzbG93Jyk7XHJcblx0fSk7XHJcblx0JCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XHJcblx0XHRcdHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XHJcblx0XHRcdHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcclxuXHRcdFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcclxuXHRcdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHRzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxucG9ydGZvbGlvLnBvc3NpYmxlSWNvbkFycmF5ID0gW1xyXG5cdCdkZXZpY29uLWpxdWVyeS1wbGFpbi13b3JkbWFyaycsXHJcblx0J2Rldmljb24tamF2YXNjcmlwdC1wbGFpbicsXHJcblx0J2Rldmljb24tZ3VscC1wbGFpbicsXHJcblx0J2Rldmljb24tZ2l0aHViLXBsYWluJyxcclxuXHQnZGV2aWNvbi1naXQtcGxhaW4td29yZG1hcmsnLFxyXG5cdCdkZXZpY29uLWNzczMtcGxhaW4td29yZG1hcmsnLFxyXG5cdCdkZXZpY29uLWF0b20tb3JpZ2luYWwtd29yZG1hcmsnLFxyXG5cdCdkZXZpY29uLWh0bWw1LXBsYWluLXdvcmRtYXJrJyxcclxuXHQnZGV2aWNvbi1ub2RlanMtcGxhaW4nLFxyXG5cdCdkZXZpY29uLXJlYWN0LW9yaWdpbmFsLXdvcmRtYXJrJyxcclxuXHQnZGV2aWNvbi1zYXNzLW9yaWdpbmFsJyxcclxuXHQnZGV2aWNvbi1jaHJvbWUtcGxhaW4td29yZG1hcmsnXHJcbl07XHJcblxyXG5wb3J0Zm9saW8uZ2V0Rml2ZVJhbmRvbU51bWJlcnMgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgcmFuZG9OdW1zID0gW107XHJcblx0Zm9yICh2YXIgaSA9IDA7IHJhbmRvTnVtcy5sZW5ndGggPCA1OyBpKyspIHtcclxuXHRcdGxldCByYW5kb051bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwb3J0Zm9saW8ucG9zc2libGVJY29uQXJyYXkubGVuZ3RoIC0gMSArIDEpKSArIDA7XHJcblx0XHRsZXQgdW5pcXVlID0gdHJ1ZTtcclxuXHRcdHJhbmRvTnVtcy5mb3JFYWNoKChudW0pID0+IHtcclxuXHRcdFx0aWYgKG51bSA9PT0gcmFuZG9OdW0pIHVuaXF1ZSA9IGZhbHNlIH0pXHJcblx0XHRpZiAocG9ydGZvbGlvLnByZXZpb3VzTnVtc1socmFuZG9OdW1zLmxlbmd0aCAtIDEpXSA9PT0gcmFuZG9OdW0pIHtcclxuXHRcdFx0dW5pcXVlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAodW5pcXVlKSB7XHJcblx0XHRcdHJhbmRvTnVtcy5wdXNoKHJhbmRvTnVtKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByYW5kb051bXM7XHJcbn1cclxuXHJcbnBvcnRmb2xpby5za2lsbEljb25UaW1lclN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGhleE9uZSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGhleDEgPSAkKCcuaGV4MSBwIGknKTtcclxuXHRcdGxldCBoZXgyID0gJCgnLmhleDIgcCBpJyk7XHJcblx0XHRsZXQgaGV4MyA9ICQoJy5oZXgzIHAgaScpO1xyXG5cdFx0bGV0IGhleDQgPSAkKCcuaGV4NCBwIGknKTtcclxuXHRcdGxldCBoZXg1ID0gJCgnLmhleDUgcCBpJyk7XHJcblx0XHRsZXQgcmFuZG9tTnVtQXJyYXkgPSBwb3J0Zm9saW8uZ2V0Rml2ZVJhbmRvbU51bWJlcnMoKTtcclxuXHRcdHBvcnRmb2xpby5wcmV2aW91c051bXMgPSByYW5kb21OdW1BcnJheTtcclxuXHRcdGNvbnNvbGUubG9nKHJhbmRvbU51bUFycmF5KVxyXG5cdFx0cmFuZG9tTnVtQXJyYXkuZm9yRWFjaCgobnVtLCBpKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgY3VycmVudEhleCA9ICQoYC5oZXgke2kgKyAxfSBwIGlgKTtcclxuXHRcdFx0Y3VycmVudEhleC5mYWRlT3V0KCdmYXN0JywgKCkgPT4ge1xyXG5cdFx0XHRcdGN1cnJlbnRIZXguYXR0cignY2xhc3MnLCAnJyk7XHJcblx0XHRcdFx0Y3VycmVudEhleC5hZGRDbGFzcyhwb3J0Zm9saW8ucG9zc2libGVJY29uQXJyYXlbbnVtXSk7XHJcblx0XHRcdFx0Y3VycmVudEhleC5hZGRDbGFzcygnc2tpbGxJY29uJyk7XHJcblx0XHRcdFx0Y3VycmVudEhleC5mYWRlSW4oJ2Zhc3QnKTtcclxuXHRcdFx0fSlcclxuXHJcblx0XHR9KVxyXG5cclxuXHJcblx0fSwgMzAwMClcclxufVxyXG5cclxucG9ydGZvbGlvLmluaXQgPSBmdW5jdGlvbigpIHtcclxuXHRwb3J0Zm9saW8uc2tpbGxJY29uVGltZXJTdGFydCgpO1xyXG5cdCQoJy5vdGhlclNraWxscycpLmhpZGUoKTtcclxufVxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHRwb3J0Zm9saW8uaW5pdCgpO1xyXG5cdHBvcnRmb2xpby5ldmVudHMoKTtcclxufSk7XHJcbiJdfQ==
