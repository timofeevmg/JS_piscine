"use strict";

// function	sumSalaries(salaries) {
// 	let	salariesArr = Object.values(salaries);

// 	let sum = 0;
// 	for (salary of salariesArr) {
// 		sum += salary;
// 	};

// 	return sum;
// };

// let salaries = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Mary": 250
// };

// let	tmp = {};

// console.log( sumSalaries(salaries) ); // 650
// console.log(sumSalaries(tmp));
//*******************************************


function	count(obj) {
	return Object.keys(obj).length;
};

let	user = {
	name: 'John',
	age: 30
};

console.log( count(user) ); // 2