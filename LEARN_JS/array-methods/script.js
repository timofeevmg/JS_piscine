"use strict";

// function	camelize(str) {
// 	let	arr = str.split('-');

// 	arr.forEach((item, index, array) => {
// 		if (item != "" && index != 0) {
// 			array[index] = item[0].toUpperCase() + item.slice(1);
// 		};
// 	});

// 	return arr.join('');
// };

// console.log(camelize("background-color") == 'backgroundColor');
// console.log(camelize("list-style-image") == 'listStyleImage');
// console.log(camelize("-webkit-transition") == 'WebkitTransition');
//*****************************************

// function	filterRange(arr, a, b) {
// 	return arr.filter(item => (item >= a && item <= b));
// };

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// console.log( filtered );
// console.log( arr );
//*****************************************


// function	filterRangeInPlace(arr, a, b) {
// 	while (true) {
// 		let idx = arr.findIndex(item => (item < a || item > b));

// 		if (idx == -1) break;

// 		arr.splice(idx, 1);
// 	};
// };

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);

// console.log(arr);
//****************************************


// let arr = [5, 2, 1, -10, 8];

// console.log(arr.sort((a, b) => (b - a)));
//*****************************************


// function	copySorted(arr) {
// 	return arr.slice().sort();
// };

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted );
// console.log( arr );
//*******************************************


// function	Calculator() {
// 	let mathOps = {
// 		'+' : (x, y) => (x + y),
// 		'-' : (x, y) => (x - y)
// 	};

// 	this.calculate = function (str) {
// 		let op = str.split(' ');

// 		if (!mathOps[op[1]] || isNaN(op[0]) || isNaN[op[2]]) {
// 			return NaN;
// 		};

// 		return mathOps[op[1]](+op[0], +op[2]);
// 	};

// 	this.addMethod = function(new_op, func) {
// 		mathOps[new_op] = func;
// 	};
	
// };

// let	calc = new Calculator();
// console.log(calc.calculate('3 + 7'));
// console.log(calc.calculate('abc - 7'));

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log( result );
// result = powerCalc.calculate("2 * 3");
// console.log( result );
// result = powerCalc.calculate("10 / 5");
// console.log( result );
//*************************************************


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// console.log( names ); // Вася, Петя, Маша
//*************************************************


// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(item => ({
// 	fullName: `${item.name} ${item.surname}`,
// 	id: `${item.id}`
// }));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// console.log( usersMapped[0].id );
// console.log( usersMapped[0].fullName );
//************************************************


// function	sortByAge(users) {
// 	users.sort((user1, user2) => (user1.age - user2.age));
// };

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя
//************************************************


// function	shuffle(arr) {
// 	for (let i = arr.length - 1; i > 0; --i) {
// 		let	j = Math.floor(Math.random() * (i + 1));
// 		let tmp = arr[i];
// 		arr[i] = arr[j];
// 		arr[j] = tmp;
// 	};
// };

// // // подсчёт вероятности для всех возможных вариантов
// // let count = {
// // 	'123': 0,
// // 	'132': 0,
// // 	'213': 0,
// // 	'231': 0,
// // 	'321': 0,
// // 	'312': 0
// //   };
  
// //   for (let i = 0; i < 1000000; i++) {
// // 	let array = [1, 2, 3];
// // 	shuffle(array);
// // 	count[array.join('')]++;
// //   };
  
// //   // показать количество всех возможных вариантов
// //   for (let key in count) {
// // 	console.log(`${key}: ${count[key]}`);
// //   };

// let arr = [1, 2, 3];

// shuffle(arr);
// console.log(arr);
//***************************************************


// function	getAverageAge(users) {
// 	return users.reduce((sum, user) => sum + user.age, 0) / users.length;
// };

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// console.log( getAverageAge(arr) );
//*************************************************


function	unique(arr) {
	let uniqueArr = [];

	if (arr.length) {
		for (let i = 0; i < arr.length; ++i) {
			let pos = arr.indexOf(arr[i], 0);

			if (pos == i || pos == -1) {
				base  = arr[i];
				uniqueArr.push(arr[i]);
			}
		};
	};

	return uniqueArr;
};

// function unique(arr) {
// 	let result = [];

// 	for (let str of arr) {
// 		if (!result.includes(str)) {
// 			result.push(str);
// 		};
// 	};

// 	return result;
// };

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O
