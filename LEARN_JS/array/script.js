"use strict";

// let styles = ['Джаз', 'Блюз'];
// console.log(styles);

// styles.push('Рок-н-ролл');
// console.log(styles);

// function	changeMidArrElem (arr, newElem) {
// 	arr[Math.floor(arr.length / 2)] = newElem;
// };

// changeMidArrElem(styles, "Классика");
// console.log(styles);

// console.log(styles.shift());
// console.log(styles);

// styles.unshift('Рэп', 'Регги');
// console.log(styles);


// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2](); // выводит весь arr


// function	sumInput () {
// 	let arr = [];

// 	for(;;) {
// 		let tmp = prompt("Добавить число в массив:");

// 		if (tmp === null || tmp === '' || !isFinite(tmp)) {
// 			break;
// 		};

// 		arr.push(tmp);
// 	};

// 	let sum = 0;
// 	for (let num of arr) {
// 		sum += +num;
// 	};

// 	return sum;
// };

// console.log(sumInput());


function	getMaxSubSum(arr) {
	let	bestSum = 0;
	let currentSum = 0;
	for (let num of arr) {
		currentSum += num;
		bestSum = Math.max(currentSum, bestSum);
		if (currentSum < 0) currentSum = 0;
	};
	return bestSum;
};

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));
