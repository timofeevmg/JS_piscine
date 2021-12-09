'use strict'

// if (age >= 14 && age <= 90) {
// 	return true;
// }

// if (!(age >= 14 && age <= 90)) {
// 	return true;
// }

// if (age < 14 || age > 90) {
// 	return true;
// }

const	login = prompt("Кто там?", "ваш логин");

if (login === 'Админ') {
	const	pass = prompt("Пароль?", "ваш пароль");

	if (pass === 'Я Главный') {
		alert('Здравствуйте!');
	} else if (pass === null || pass === '') {
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}
} else if (login === null || login === '') {
	alert('Отменено');
} else {
	alert('Я вас не знаю');
}