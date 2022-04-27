"use strict";

// let promise = new Promise(function(resolve, reject) {
// 	// эта функция выполнится автоматически, при вызове new Promise
  
// 	// через 1 секунду сигнализировать, что задача выполнена с результатом "done"
// 	setTimeout(() => resolve("done"), 1000);
// 	// setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });

// promise.then(
// 	result => console.log(result),
// 	error => console.log(error)
// );

// promise.then(alert); // выведет "done!" спустя одну секунду

// // .catch(f) это то же самое, что promise.then(null, f)
// promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду

// new Promise((resolve, reject) => {
// 	/* сделать что-то, что займёт время, и после вызвать resolve/reject */
//   })
// 	// выполнится, когда промис завершится, независимо от того, успешно или нет
// 	.finally(() => остановить индикатор загрузки)
// 	.then(result => показать результат, err => показать ошибку)

// new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("result"), 2000)
//   })
// 	.finally(() => alert("Промис завершён"))
// 	.then(result => alert(result)); // <-- .then обработает результат

// new Promise((resolve, reject) => {
// 	throw new Error("error");
//   })
// 	.finally(() => alert("Промис завершён"))
// 	.catch(err => alert(err));  // <-- .catch обработает объект ошибки


/*************/

// let promise = new Promise(function(resolve, reject) {
// 	resolve(1);

// 	setTimeout(() => resolve(2), 1000); //ignored
// });

// promise.then(console.log);


/************/

// function delay(ms) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(() => resolve(), ms);
// 	});
// }

// // function delay(ms) {
// // 	return new Promise(resolve => setTimeout(resolve, ms));
// // }

// delay(1000).then(() => console.log('выполнилось через 1 секунду'));
// delay(2000).then(() => console.log('выполнилось через 2 секунды'));
// delay(3000).then(() => console.log('выполнилось через 3 секунды'));


/************/

function showCircle(cx, cy, radius) {
	let div = document.createElement('div');
	div.style.width = 0;
	div.style.height = 0;
	div.style.left = cx + 'px';
	div.style.top = cy + 'px';
	div.className = 'circle';
	document.body.append(div);

	return new Promise(resolve => {
		setTimeout(() => {
			div.style.width = radius * 2 + 'px';
			div.style.height = radius * 2 + 'px';

			div.addEventListener("transitionend", function handler() {
				div.removeEventListener("transitionend", handler);
				resolve(div);
			});
		}, 0);
	});
};

function goCircle() {
	showCircle(150, 150, 100).then(div => {
			div.classList.add('message-ball');
			div.append("Hello, world!");
		});
};
