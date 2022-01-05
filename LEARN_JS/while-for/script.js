'use strict'

let n;
do {n = +prompt("Верхняя граница поиска:","")}
while (n < 2);

let answer = "";

let num;
main: for (num = 2; num < n; ++num) {
	for (let del = 2; del < n; ++del) {
		if (num % del === 0 && del != num) {
			continue main;
		};
	};
	answer += `${num},`;
};
console.log(answer);