'use strict';

// to String

	// 1.
	console.log(typeof(String(null)));//string
	console.log(typeof(String(45)));//string

	// 2.
	console.log(typeof(5 + '')); // при сложении со строкой получается строка

	const num = 5;

	console.log("https://vk.com/catalog/" + num);

	const fontSize = 26 + 'px';

	console.log(fontSize); //26px

// to Number

	// 1.
	console.log(typeof(Number('45')));// number

	// 2.
	console.log(typeof(+'45'));//number

	// 3.
	console.log(typeof(parseInt('15px', 10)));// number

		// let answer = +prompt('Type something:', '');

// to Boolean

	// false -> 0, ''(пустая строка), null, undefined, NaN

	// 1.
	let switcher = null;

	if (switcher) {
		console.log('Loading...');
	}

	switcher = 1;

	if (switcher) {
		console.log('Loading...');
	}

	// 2.
	console.log(typeof(Boolean('4')));

	// 3.
	console.log(typeof(!!'4'));