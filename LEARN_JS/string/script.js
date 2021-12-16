"use strict";

// function	ucFirst(str) {
// 	if (str == "" || str == null) {
// 		return str;
// 	} else {
// 		return (str[0].toUpperCase() + str.slice(1));
// 	};
// };

// let str = prompt("Любая строка:","");

// console.log(`${str}->${ucFirst(str)}`);


// function	checkSpam(str) {
// 	if (!str) {
// 		return false;
// 	};

// 	let tmp = str.toLowerCase();

// 	return (tmp.includes('viagra') || tmp.includes('xxx'));
// };

// let str = prompt("Тестовая строка:");
// console.log(checkSpam(str));


// function	truncate(str, maxlength) {
// 	if (str && str.length > maxlength) {
// 		return (`${str.slice(0, (maxlength - 1))}...`);
// 	} else {
// 		return str;
// 	};
// };

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));

let currency = prompt("Сумма валюты в долларах:");

function	extractCurrencyValue(str) {
	return +str.slice(1);
};

console.log(extractCurrencyValue(currency));
console.log(extractCurrencyValue('$120') === 120);
