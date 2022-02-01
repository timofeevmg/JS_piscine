"use strict";
/**
 * setInterval
 */
// function	printNumbers(from, to) {
// 	function	printNum() {
// 		if (from == to)
// 			clearInterval(timer);
// 		console.log(from);
// 		++from;
// 	}
// 	let timer = setInterval(printNum, 1000);
// }

/**
 * recursive setTimeout
*/
function	printNumbers(from, to) {
	let timer = setTimeout(function print() {
		console.log(from);
		if (from < to)
			timer = setTimeout(print, 1000);
		++from;
	}, 1000);
}

printNumbers(1, 5);