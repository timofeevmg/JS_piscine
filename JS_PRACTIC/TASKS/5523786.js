'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	if (arr.length === 0)
		return 'Семья пуста';

	let result = 'Семья состоит из: ';

	for (let member of arr) {
		result += `${member} `;
	}

	return result;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	for (let city of arr) {
		console.log(city.toLowerCase());
	}
}
