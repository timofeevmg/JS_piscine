"use strict";

// function	showThis(a, b) {
// 	console.log(this);
// 	function	sum() {
// 		console.log(this);
// 		return (a + b);
// 	};
// 	console.log(sum());
// };

// showThis(4, 5);
/*************************/
// const	obj = {
// 	a:	20,
// 	b:	15,
// 	sum:	function() {
// 		console.log(this);
// 		// function	shout() {
// 		// 	console.log(this);
// 		// };
// 		// shout();
// 	}
// };

// obj.sum();
/*************************/
// function	User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log("Hello!" + this.name);
// 	};
// };
// let	ivan = new User('Ivan', 23);

// ivan.hello();
/*************************/
// function	sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + ' ' + surname);
// };

// const	user = {
// 	name: 'John'
// };

// sayName.call(user, 'Smith');	// привязка контекста вызова
// sayName.apply(user, ['Smith']);	// привязка контекста вызова


// function	count(num) {
// 	return (this * num);
// };

// const	double = count.bind(2);//создается новая функция, привязав контекст вызова
// console.log(double(3));
// console.log(double(33));
/*************************/

//практика

const	btn = document.querySelector('button');

btn.addEventListener('click', function() {
	// console.log(this);
	this.style.background = 'red';// при обычном объявлении функции this == event.target
});

// btn.addEventListener('click', (event) => {
// 	event.target.style.background = 'red';
// });

const	obj = {
	num: 5,
	sayNumber: function() {
		const	say = () => {	// стрелочная функция наследует контекст вызова от своего родителя
			console.log(this);
		};
		say();
	}
};

obj.sayNumber();

// особенности синтаксиса стрелочных функций
const	double = a => a * 2;	// если один аргумент, то можно без скобок;
console.log(double(4));			// если функция из одной строки, то return можно не писать