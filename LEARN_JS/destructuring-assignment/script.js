"use strict";

// let user = {
// 	name: "John",
// 	years: 30
// };

// let {name, years: age, isAdmin = "false"} = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);
/******************************************/

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

let sal = {};

function	topSalary(salaries) {
	let name = null;
	let max = 0;
	for (let [key, value] of Object.entries(salaries)) {
		if (value > max) {
			max = value;
			name = key;
		};
	};
	return name;
};

console.log(topSalary(salaries));
console.log(topSalary(sal));
