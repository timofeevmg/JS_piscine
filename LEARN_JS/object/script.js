"use strict";

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;


// function	isEmpty(obj) {
// 	let key;

// 	for (key in obj) {};

// 	if (key === undefined) {
// 		return true;
// 	} else {
// 		return false;
// 	};
// };


// let	salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// },
// 	empty = {};

// function salaryTotal(obj) {
// 	let total = 0;

// 	for (let key in obj) {
// 		total += obj[key];
// 	};
// 	return total;
// };

// console.log(salaryTotal(salaries));
// console.log(salaryTotal(empty));


let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof(obj[key]) === "number") {
			obj[key] *= 2;
		};
	};
};

multiplyNumeric(menu);
console.log(menu);
