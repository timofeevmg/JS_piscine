"use strict";
/**
 * #1
*/
// function makeCounter() {

// 	function counter() {
// 		return counter.count++;
// 	};

// 	counter.count = 0;

// 	counter.set = function(num) {
// 		return counter.count = num;
// 	};

// 	counter.decrease = function () {
// 		return counter.count--;
// 	};

// 	return counter;
// };

/**
 * #2
 */
function	makeCounter() {
	let	count = 0;

	function	counter() {
		return count++;
	}

	counter.set = num => count = num;

	counter.decrease = () => count--;

	return counter;
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10); // установить новое значение счётчика

console.log( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log( counter() ); // 10 (вместо 11)

/**
 * -----------------------------------------
 */
function	sum(a) {
	let	accum = a;

	function	f(b) {
		accum += b;
		return f;
	};

	f.toString = function() {
		return accum;
	};

	return f;
};

console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);