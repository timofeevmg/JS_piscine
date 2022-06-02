'use strict';

// Место для первой задачи
function getTimeFromMinutes(minutes) {
	if (!Number.isInteger(minutes) || minutes < 0)
		return 'Ошибка, проверьте данные';
	const hours = (minutes / 60 - minutes % 60 / 60).toFixed();
	const minutesRemain = minutes - hours * 60;
	let hoursName = getRightHoursName(hours);

	return `Это ${hours} ${hoursName} и ${minutesRemain} минут`;
}

function getRightHoursName(hours) {
	const lastHoursSymbol = hours.toString()[hours.toString().length - 1];
	const beforeLastHoursSymbol = hours.toString()[hours.toString().length - 2];

	if (lastHoursSymbol === '1' && beforeLastHoursSymbol != '1')
		return 'час';
	else if ((lastHoursSymbol === '2' || lastHoursSymbol === '3' || lastHoursSymbol === '4') && beforeLastHoursSymbol != '1')
		return 'часа';
	else
		return 'часов';
}

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
	const arr = Array.from(arguments);

	if (!checkArray(arr))
		return 0;
	return Math.max(...arr);
}

function checkArray(arr) {
	return arr.every(elem => typeof elem === 'number') && arr.length === 4;
}
