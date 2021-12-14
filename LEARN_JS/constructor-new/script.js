"use strict";

// let obj = {};

// function A() {
// 	return obj;
// };

// function B() {
// 	return obj;
// };

// let a = new A;
// let b = new B;

// console.log( a == b ); //true


// function Calculator() {
// 	this.read = function () {
// 		this.x = +prompt( "x:", 0 );
// 		this.y = +prompt( "y:", 0 );
// 	};

// 	this.sum = function() {
// 		return ( this.x + this.y );
// 	};

// 	this.mul = function() {
// 		return ( this.x * this.y );
// 	};
// };

// let calculator = new Calculator();
// calculator.read();
// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );


function	Accumulator(startingValue) {
	this.value = startingValue;

	this.read = function () {
		this.value += +prompt("Добавить число:", 0);
	};
};

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

console.log(accumulator.value); // выведет сумму этих значений
