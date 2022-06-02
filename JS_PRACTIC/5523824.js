'use strict';

const someString = 'This is some strange string';

function reverse(str) {
	if (typeof(str) !== 'string')
		return 'Ошибка!';

	let result = '';
	for (let i = str.length - 1; i >= 0; i--) {
		result += `${str[i]}`;
	}
	return result;
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	if (arr.length === 0)
		return 'Нет доступных валют';

	let result = 'Доступные валюты:\n'
	for (let curr of arr) {
		if (curr !== missingCurr)
			result += `${curr}\n`;
	}
	return result;
}
