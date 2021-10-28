'use strict';

const arr = [5, 1, 0, 9, 10];

// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

arr.sort(compareNum);

function compareNum(a, b) {
	return (a - b);
}

console.log(arr);