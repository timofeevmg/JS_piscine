"use strict";

// function loadScript(src, callback) {
// 	let script = document.createElement('script');
// 	script.src = src;
// 	script.onload = () => callback(script);
// 	document.head.append(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
// 	alert(`Здорово, скрипт ${script.src} загрузился`);
// 	alert( _ ); // функция, объявленная в загруженном скрипте
// });


/**************/

function showCircle(cx, cy, radius, callback) {
	let div = document.createElement('div');
	div.style.width = 0;
	div.style.height = 0;
	div.style.left = cx + 'px';
	div.style.top = cy + 'px';
	div.className = 'circle';
	document.body.append(div);

	setTimeout(() => {
		div.style.width = radius * 2 + 'px';
		div.style.height = radius * 2 + 'px';

		div.addEventListener("transitionend", function handler() {
			div.removeEventListener("transitionend", handler);
			callback(div);
		});
	}, 0);
}

function goCircle() {
	showCircle(150, 150, 100, div => {
		div.classList.add('message-ball');
		div.append("Hello, world!");
	});
}