"use strict";

const	btn = document.querySelector('.btn');
let		timerId,
		i = 0;

function	myAnimation() {
	const	elem = document.querySelector('div.box');
	let		pos = 0;

	const id = setInterval(frame, 20);

	function	frame() {
		if (pos == 301) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = `${pos}px`;
			elem.style.left = `${pos}px`;
		}
	};
};

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
// 	// const	timerId = setTimeout(logger, 2000);	//в timerId уникальный идентификатор таймера
// 	timerId = setInterval(logger, 500);
// });

// const	timerId = setTimeout(function(message) {
// 	console.log(message);	//функция, которая должная запуститься через 2000 мс(миллисек),
// }, 2000, 'время пришло');	//с неопределенным количеством аргументов

// function	logger() {
// 	if (i == 3) {
// 		clearInterval(timerId); //отмена/сброс таймера
// 	}
// 	console.log('новое сообщение');
// 	i++;
// };

/********* рекурсивный вызов таймера *********/
// let	id = setTimeout(function log() {
// 	console.log('часы тикают');
// 	id = setTimeout(log, 500); // сохраняется интервал в 500, без учета времени выполнения функции
// }, 500);