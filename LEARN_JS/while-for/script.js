'use strict'

// for (let i = 0; i < 3; i++) {
// 	alert( `number ${i}!` );
//   }

// let i = 0;
// while (i < 3) {
// 	alert( `number ${i}!` );
// 	i++;
// }

// let num;
// do {
// 	num = +prompt("Введите число больше 100:", "");
// } while (num <= 100 && num);

const MIN = 2;
let answer = '';
let n;
do {
	n = +prompt("Верхняя граница поиска простого числа:", "");
} while (n <= 2);

for (let num = MIN; num < n; ++num) {
	for (let del = MIN; del < num; ++del) {
		if (num % del === 0 && num != del) {
			break ;
		}
	};
	answer += num + ',';
};
alert(answer);
