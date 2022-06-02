'use strict';

function fib(count) {
	let arr = [];
	let result = '';

	if (!Number.isInteger(count) || count <= 0)
		return result;

	for (let i = 0; i < count; i++) {
		if (arr[i - 1] === undefined || arr[i - 2] === undefined)
			arr[i] = i;
		else
			arr[i] = arr[i - 1] + arr[i - 2];
	}
	
	for (let j = 0; j < arr.length; j++) {
		result += `${arr[j]}`;
		if (j < arr.length - 1)
			result += ' ';
	}
	return result;
}
