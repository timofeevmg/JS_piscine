'use strict';

function deepCount(a){
	let count = 0;

	for (let elem of a) {
		if (Array.isArray(elem)) {
			count++;
			count += deepCount(elem);
		} else {
			count++;
		}
	}

	return count;
}

console.log(deepCount([1, 2, 3]));
console.log(deepCount(["1", 2, "3", ["10"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));
