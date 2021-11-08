"use strict";

const	inputUsd = document.querySelector('input#usd'),
		inputRub = document.querySelector('input#rub');

inputRub.addEventListener('input', () => {
	const	request = new XMLHttpRequest();

	request.open('GET', 'js/current.json');
	// request.open('GET', 'js/missing.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();
	// request.addEventListener('readystatechange', () => {
	// 	if (request.readyState === 4 && request.status === 200) {
	// 		console.log(request.response);

	// 		const	data = JSON.parse(request.response);

	// 		inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
	// 	} else {
	// 		inputUsd.value = 'Something wrong...';
	// 	}
	// });
	request.addEventListener('load', () => {
		console.log(request.status);
		if (request.status === 200) {
			const	data = JSON.parse(request.response);

			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
		} else {
			inputUsd.value = 'Something wrong...';
		}
	});
});