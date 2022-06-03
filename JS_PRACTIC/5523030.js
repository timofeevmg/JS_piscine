'use strict';

function factorial(num) {
    if (typeof(num) !== 'number' || !Number.isInteger(num)) {
		return 'Неверный формат числа';
	} else if (num <= 1) {
		return 1;
	} else {
		return factorial(num - 1) * num;
	}
};
