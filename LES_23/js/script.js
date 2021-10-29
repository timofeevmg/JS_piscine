'use strict';

let str = "строка";
let strObj = new String(str);

console.log(typeof(str)); //string
console.log(typeof(strObj)); //object!

// console.dir([1, 3, 4]);


const soldier = {
	health: 400,
	armor: 100,
	sayHi: function() {
		console.log('Hi!');
	}
};

const john = Object.create(soldier);

// const john = {
// 	health: 100
// };

// // john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
john.sayHi();