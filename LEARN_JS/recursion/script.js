"use strict";

// // cycle
// function	sumTo(n) {
// 	let sum = 0;
// 	for (let i = 0; i <= n; ++i) {
// 		sum += i;
// 	}
// 	return sum;
// };

// // recursion
// function	sumTo(n) {
// 	return n == 1 ? 1 : n + sumTo(n - 1);
// };

// // arithmetic progression
// function	sumTo(n) {
// 	return n / 2 * (n + 1);
// };

// console.log(sumTo(100));
/******************************************/

// function	factorial(n) {
// 	return n == 1 ? 1 : n * factorial(n - 1);
// };

// console.log(factorial(5));
/******************************************/

// function	fib(n) {
// 	let num1 = 1;
// 	let num2 = 1;
// 	let tmp;
// 	for (let i = 3; i <= n; ++i) {
// 		tmp = num2;
// 		num2 +=num1;
// 		num1 = tmp;
// 	}
// 	return num2;
// };

// console.log(fib(3));
// console.log(fib(7));
// console.log(fib(77));
/********************************************/

// let list = {
// 	value: 1,
// 	next: {
// 	  value: 2,
// 	  next: {
// 		value: 3,
// 		next: {
// 		  value: 4,
// 		  next: null
// 		}
// 	  }
// 	}
// };

// function	printList(list) {
// 	let ret = `${list.value} `;
// 	let tmp = list.next;
// 	while (tmp != null) {
// 		ret += `${tmp.value} `;
// 		tmp = tmp.next;
// 	}
// 	return ret;
// };

// console.log(printList(list));

// // recursion
// function	printList(list) {
// 	console.log(list.value);
// 	if (list.next != null)
// 		printList(list.next);
// };

// printList(list);
/****************************************/

let list = {
		value: 1,
		next: {
		  value: 2,
		  next: {
			value: 3,
			next: {
			  value: 4,
			  next: null
			}
		  }
		}
	};

// function	printListReverse(list) {
// 	let arr = [];
// 	let tmp = list;
// 	while (tmp != null) {
// 		arr.push(tmp.value);
// 		tmp = tmp.next;
// 	}
// 	for (let i = arr.length - 1; i >= 0; --i) {
// 		console.log(arr[i]);
// 	}
// };

// recursion
function	printListReverse(list) {
	if (list.next != null)
		printListReverse(list.next);
	console.log(list.value);
};

printListReverse(list);

