"use strict";

// function sum(a) {
// 	return function(b) {
// 		return a + b;
// 	};
// };

// console.log(sum(1)(3));
/***********************************/

// function inBetween(a, b) {
// 	return function(value) {
// 		return (value >= a && value <= b);
// 	};
// };

// function inArray(arr) {
// 	return function(value) {
// 		return arr.includes(value);
// 	};
// };

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
/*******************************************************/

// let users = [
// 	{ name: "John", age: 20, surname: "Johnson" },
// 	{ name: "Pete", age: 18, surname: "Peterson" },
// 	{ name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(key) {
// 	return function(a, b) {
// 		return a[key] > b[key] ? 1 : -1;
// 	};
// };

// users.sort(byField("name"));
// users.forEach(user => console.log(user.name));

// users.sort(byField('age'));
// users.forEach(user => console.log(user.name));
/***********************************************/

function makeArmy() {
	let shooters = [];

	for (let i = 0; i < 10; ++i) {
		let shooter = function() { // функция shooter
			console.log( i ); // должна выводить порядковый номер
		};
		shooters.push(shooter);
	};

	return shooters;
};

let army = makeArmy();

army[0]();
army[5]();
