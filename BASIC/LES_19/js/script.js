'use strict';

function first() {
	setTimeout(function () {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();

function learnJS(lang, callback) {
	console.log(`Я учу ${lang}`);
	callback();
}

function done() {
	console.log('Урок пройден!');
}

learnJS('JavaScript', done);	// done без скобок, потому что функция передаётся,
								// а не вызывается