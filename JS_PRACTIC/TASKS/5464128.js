'use strict';

const lines = 5;
const columns = 11;
const center = Math.round(columns / 2);
let result = '';

for (let i = 0; i <= lines; i++) {
	let line = '';
	for (let j = 0; j < center + i; j++) {
		if (j >= center - 1 - i && j <= center - 1 + i ) {
			line += '*';
		} else {
			line += ' ';
		}
	}
	result += `${line}\n`;
}

console.log(result);