"use strict"

window.addEventListener('DOMContentLoaded', () => {

/***** Tabs ******/
	const	tabs = document.querySelectorAll('.tabheader__item'),
			tabsContent = document.querySelectorAll('.tabcontent'),
			tabsParent = document.querySelector('.tabheader__items');
	
	function	hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	};

	function	showTabContent(i = 0) {						//если функция будет вызвана без аргументов,
		tabsContent[i].classList.add('show', 'fade');				//то подставится 0.
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	};

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		// if (target && target.matches('div.tabheader__item') && !target.matches('div.tabheader__item_active'))) {
		// }
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});


/***** Timer *****/
	const	deadline = '2022-01-01';

	function	getTimeRemaining(endtime) {
		const	now = new Date();
		const	t = Date.parse(endtime) - now,
				days = Math.floor(t / (1000 * 60 * 60 * 24)),
				hours = Math.floor((t / (1000 * 60 * 60)) % 24),
				minutes = Math.floor((t / (1000 * 60)) % 60),
				seconds = Math.floor((t / 1000) % 60);

		return {
			'total': t,			// или
			'days': days,		// days,
			'hours': hours,		// hours,
			'minutes': minutes,	// minutes,
			'seconds': seconds	// seconds
		};
	};

	function	getZero(num) {
		if (num >= 0 && num < 10) {
			return (`0${num}`);
		} else {
			return (num);
		}
	};

	function	setClock(selector, endtime) {
		const	timer = document.querySelector(selector),
				days = timer.querySelector('#days'),
				hours = timer.querySelector('#hours'),
				minutes = timer.querySelector('#minutes'),
				seconds = timer.querySelector('#seconds'),
				timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function	updateClock() {
			const	t = getTimeRemaining(endtime);

			days.textContent = getZero(t.days);
			hours.textContent = getZero(t.hours);
			minutes.textContent = getZero(t.minutes);
			seconds.textContent = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		};
	};

	setClock('.timer', deadline);

});