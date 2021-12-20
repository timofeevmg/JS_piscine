'use strict';

// function	unique(arr) {
// 	return Array.from(new Set(arr));
// };

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(values) ); // Hare,Krishna,:-O
//***************************************************


// function	aclean(arr) {
// 	let wordsMap = new Map();

// 	for (let word of arr) {
// 		wordsMap.set(Array.from(word.toLowerCase()).sort().join(""), word);
// 	};

// 	return Array.from(wordsMap.values());
// };

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));
//***************************************************


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys);