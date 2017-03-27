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
	$('nav button').on('click', function (event) {
		event.preventDefault();
		/* Act on the event */
		$('nav ul').slideToggle('fast');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBTSxZQUFZLEVBQWxCO0FBQ0EsVUFBVSxZQUFWLEdBQXlCLEVBQXpCO0FBQ0EsVUFBVSxNQUFWLEdBQW1CLFlBQVc7QUFDN0IsR0FBRSxrQkFBRixFQUFzQixFQUF0QixDQUF5QixPQUF6QixFQUFrQyxVQUFTLEtBQVQsRUFBZ0I7QUFDakQsUUFBTSxjQUFOO0FBQ0E7QUFDQSxJQUFFLGNBQUYsRUFBa0IsV0FBbEIsQ0FBOEIsTUFBOUI7QUFDQSxFQUpEO0FBS0EsR0FBRSw4QkFBRixFQUFrQyxLQUFsQyxDQUF3QyxZQUFXO0FBQ2xELE1BQUksU0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLEtBQTFCLEVBQWlDLEVBQWpDLEtBQXdDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsRUFBNkIsRUFBN0IsQ0FBeEMsSUFBNEUsU0FBUyxRQUFULElBQXFCLEtBQUssUUFBMUcsRUFBb0g7QUFDbkgsT0FBSSxTQUFTLEVBQUUsS0FBSyxJQUFQLENBQWI7QUFDQSxZQUFTLE9BQU8sTUFBUCxHQUFnQixNQUFoQixHQUF5QixFQUFFLFdBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixDQUFoQixDQUFYLEdBQWdDLEdBQWxDLENBQWxDO0FBQ0EsT0FBSSxPQUFPLE1BQVgsRUFBbUI7QUFDbEIsTUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3ZCLGdCQUFXLE9BQU8sTUFBUCxHQUFnQjtBQURKLEtBQXhCLEVBRUcsSUFGSDtBQUdBLFdBQU8sS0FBUDtBQUNBO0FBQ0Q7QUFDRCxFQVhEO0FBWUEsR0FBRSxZQUFGLEVBQWdCLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFVBQVMsS0FBVCxFQUFnQjtBQUMzQyxRQUFNLGNBQU47QUFDQTtBQUNBLElBQUUsUUFBRixFQUFZLFdBQVosQ0FBd0IsTUFBeEI7QUFDQSxFQUpEO0FBS0EsQ0F2QkQ7O0FBeUJBLFVBQVUsaUJBQVYsR0FBOEIsQ0FDN0IsK0JBRDZCLEVBRTdCLDBCQUY2QixFQUc3QixvQkFINkIsRUFJN0Isc0JBSjZCLEVBSzdCLDRCQUw2QixFQU03Qiw2QkFONkIsRUFPN0IsZ0NBUDZCLEVBUTdCLDhCQVI2QixFQVM3QixzQkFUNkIsRUFVN0IsaUNBVjZCLEVBVzdCLHVCQVg2QixFQVk3QiwrQkFaNkIsQ0FBOUI7O0FBZUEsVUFBVSxvQkFBVixHQUFpQyxZQUFXO0FBQzNDLEtBQUksWUFBWSxFQUFoQjs7QUFEMkM7QUFHMUMsTUFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixVQUFVLGlCQUFWLENBQTRCLE1BQTVCLEdBQXFDLENBQXJDLEdBQXlDLENBQTFELENBQVgsSUFBMkUsQ0FBMUY7QUFDQSxNQUFJLFNBQVMsSUFBYjtBQUNBLFlBQVUsT0FBVixDQUFrQixVQUFDLEdBQUQsRUFBUztBQUMxQixPQUFJLFFBQVEsUUFBWixFQUFzQixTQUFTLEtBQVQ7QUFDdEIsR0FGRDtBQUdBLE1BQUksVUFBVSxZQUFWLENBQXdCLFVBQVUsTUFBVixHQUFtQixDQUEzQyxNQUFtRCxRQUF2RCxFQUFpRTtBQUNoRSxZQUFTLEtBQVQ7QUFDQTtBQUNELE1BQUksTUFBSixFQUFZO0FBQ1gsYUFBVSxJQUFWLENBQWUsUUFBZjtBQUNBO0FBYnlDOztBQUUzQyxNQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLFVBQVUsTUFBVixHQUFtQixDQUFuQyxFQUFzQyxHQUF0QyxFQUEyQztBQUFBO0FBWTFDOztBQUVELFFBQU8sU0FBUDtBQUNBLENBakJEOztBQW1CQSxVQUFVLG1CQUFWLEdBQWdDLFlBQVc7QUFDMUMsS0FBSSxTQUFTLFlBQVksWUFBVztBQUNuQyxNQUFJLE9BQU8sRUFBRSxXQUFGLENBQVg7QUFDQSxNQUFJLE9BQU8sRUFBRSxXQUFGLENBQVg7QUFDQSxNQUFJLE9BQU8sRUFBRSxXQUFGLENBQVg7QUFDQSxNQUFJLE9BQU8sRUFBRSxXQUFGLENBQVg7QUFDQSxNQUFJLE9BQU8sRUFBRSxXQUFGLENBQVg7QUFDQSxNQUFJLGlCQUFpQixVQUFVLG9CQUFWLEVBQXJCO0FBQ0EsWUFBVSxZQUFWLEdBQXlCLGNBQXpCO0FBQ0EsVUFBUSxHQUFSLENBQVksY0FBWjtBQUNBLGlCQUFlLE9BQWYsQ0FBdUIsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZOztBQUVsQyxPQUFJLGFBQWEsWUFBUyxJQUFJLENBQWIsV0FBakI7QUFDQSxjQUFXLE9BQVgsQ0FBbUIsTUFBbkIsRUFBMkIsWUFBTTtBQUNoQyxlQUFXLElBQVgsQ0FBZ0IsT0FBaEIsRUFBeUIsRUFBekI7QUFDQSxlQUFXLFFBQVgsQ0FBb0IsVUFBVSxpQkFBVixDQUE0QixHQUE1QixDQUFwQjtBQUNBLGVBQVcsUUFBWCxDQUFvQixXQUFwQjtBQUNBLGVBQVcsTUFBWCxDQUFrQixNQUFsQjtBQUNBLElBTEQ7QUFPQSxHQVZEO0FBYUEsRUF0QlksRUFzQlYsSUF0QlUsQ0FBYjtBQXVCQSxDQXhCRDs7QUEwQkEsVUFBVSxJQUFWLEdBQWlCLFlBQVc7QUFDM0IsV0FBVSxtQkFBVjtBQUNBLEdBQUUsY0FBRixFQUFrQixJQUFsQjtBQUNBLENBSEQ7O0FBS0EsRUFBRSxZQUFXO0FBQ1osV0FBVSxJQUFWO0FBQ0EsV0FBVSxNQUFWO0FBQ0EsQ0FIRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBwb3J0Zm9saW8gPSB7fTtcclxucG9ydGZvbGlvLnByZXZpb3VzTnVtcyA9IFtdO1xyXG5wb3J0Zm9saW8uZXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0JCgnLnNlZU1vcmVfX3NraWxscycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0LyogQWN0IG9uIHRoZSBldmVudCAqL1xyXG5cdFx0JCgnLm90aGVyU2tpbGxzJykuc2xpZGVUb2dnbGUoJ3Nsb3cnKTtcclxuXHR9KTtcclxuXHQkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcclxuXHRcdFx0dmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xyXG5cdFx0XHRpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRcdHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJ25hdiBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuXHRcdCQoJ25hdiB1bCcpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XHJcblx0fSk7XHJcbn1cclxuXHJcbnBvcnRmb2xpby5wb3NzaWJsZUljb25BcnJheSA9IFtcclxuXHQnZGV2aWNvbi1qcXVlcnktcGxhaW4td29yZG1hcmsnLFxyXG5cdCdkZXZpY29uLWphdmFzY3JpcHQtcGxhaW4nLFxyXG5cdCdkZXZpY29uLWd1bHAtcGxhaW4nLFxyXG5cdCdkZXZpY29uLWdpdGh1Yi1wbGFpbicsXHJcblx0J2Rldmljb24tZ2l0LXBsYWluLXdvcmRtYXJrJyxcclxuXHQnZGV2aWNvbi1jc3MzLXBsYWluLXdvcmRtYXJrJyxcclxuXHQnZGV2aWNvbi1hdG9tLW9yaWdpbmFsLXdvcmRtYXJrJyxcclxuXHQnZGV2aWNvbi1odG1sNS1wbGFpbi13b3JkbWFyaycsXHJcblx0J2Rldmljb24tbm9kZWpzLXBsYWluJyxcclxuXHQnZGV2aWNvbi1yZWFjdC1vcmlnaW5hbC13b3JkbWFyaycsXHJcblx0J2Rldmljb24tc2Fzcy1vcmlnaW5hbCcsXHJcblx0J2Rldmljb24tY2hyb21lLXBsYWluLXdvcmRtYXJrJ1xyXG5dO1xyXG5cclxucG9ydGZvbGlvLmdldEZpdmVSYW5kb21OdW1iZXJzID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IHJhbmRvTnVtcyA9IFtdO1xyXG5cdGZvciAodmFyIGkgPSAwOyByYW5kb051bXMubGVuZ3RoIDwgNTsgaSsrKSB7XHJcblx0XHRsZXQgcmFuZG9OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAocG9ydGZvbGlvLnBvc3NpYmxlSWNvbkFycmF5Lmxlbmd0aCAtIDEgKyAxKSkgKyAwO1xyXG5cdFx0bGV0IHVuaXF1ZSA9IHRydWU7XHJcblx0XHRyYW5kb051bXMuZm9yRWFjaCgobnVtKSA9PiB7XHJcblx0XHRcdGlmIChudW0gPT09IHJhbmRvTnVtKSB1bmlxdWUgPSBmYWxzZVxyXG5cdFx0fSlcclxuXHRcdGlmIChwb3J0Zm9saW8ucHJldmlvdXNOdW1zWyhyYW5kb051bXMubGVuZ3RoIC0gMSldID09PSByYW5kb051bSkge1xyXG5cdFx0XHR1bmlxdWUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmICh1bmlxdWUpIHtcclxuXHRcdFx0cmFuZG9OdW1zLnB1c2gocmFuZG9OdW0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJhbmRvTnVtcztcclxufVxyXG5cclxucG9ydGZvbGlvLnNraWxsSWNvblRpbWVyU3RhcnQgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgaGV4T25lID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgaGV4MSA9ICQoJy5oZXgxIHAgaScpO1xyXG5cdFx0bGV0IGhleDIgPSAkKCcuaGV4MiBwIGknKTtcclxuXHRcdGxldCBoZXgzID0gJCgnLmhleDMgcCBpJyk7XHJcblx0XHRsZXQgaGV4NCA9ICQoJy5oZXg0IHAgaScpO1xyXG5cdFx0bGV0IGhleDUgPSAkKCcuaGV4NSBwIGknKTtcclxuXHRcdGxldCByYW5kb21OdW1BcnJheSA9IHBvcnRmb2xpby5nZXRGaXZlUmFuZG9tTnVtYmVycygpO1xyXG5cdFx0cG9ydGZvbGlvLnByZXZpb3VzTnVtcyA9IHJhbmRvbU51bUFycmF5O1xyXG5cdFx0Y29uc29sZS5sb2cocmFuZG9tTnVtQXJyYXkpXHJcblx0XHRyYW5kb21OdW1BcnJheS5mb3JFYWNoKChudW0sIGkpID0+IHtcclxuXHJcblx0XHRcdGxldCBjdXJyZW50SGV4ID0gJChgLmhleCR7aSArIDF9IHAgaWApO1xyXG5cdFx0XHRjdXJyZW50SGV4LmZhZGVPdXQoJ2Zhc3QnLCAoKSA9PiB7XHJcblx0XHRcdFx0Y3VycmVudEhleC5hdHRyKCdjbGFzcycsICcnKTtcclxuXHRcdFx0XHRjdXJyZW50SGV4LmFkZENsYXNzKHBvcnRmb2xpby5wb3NzaWJsZUljb25BcnJheVtudW1dKTtcclxuXHRcdFx0XHRjdXJyZW50SGV4LmFkZENsYXNzKCdza2lsbEljb24nKTtcclxuXHRcdFx0XHRjdXJyZW50SGV4LmZhZGVJbignZmFzdCcpO1xyXG5cdFx0XHR9KVxyXG5cclxuXHRcdH0pXHJcblxyXG5cclxuXHR9LCAzMDAwKVxyXG59XHJcblxyXG5wb3J0Zm9saW8uaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG5cdHBvcnRmb2xpby5za2lsbEljb25UaW1lclN0YXJ0KCk7XHJcblx0JCgnLm90aGVyU2tpbGxzJykuaGlkZSgpO1xyXG59XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cdHBvcnRmb2xpby5pbml0KCk7XHJcblx0cG9ydGZvbGlvLmV2ZW50cygpO1xyXG59KTtcclxuIl19
