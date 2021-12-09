"use strict"

//1
// let answer = prompt('Какое "официальное" название JavaScript?', 'ваш ответ');

// if (answer === 'ECMAScript') {
// 	alert("Правильно!");
// } else {
// 	alert('Не знаете? “ECMAScript”!');
// }

//2
// let num = +prompt("Введите число:", "ваше любое число");

// if (num === 0) {
// 	alert(0);
// } else if (num > 0) {
// 	alert(1);
// } else if (num < 0) {
// 	alert(-1);
// }

//4
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let	message = (login == 'Сотрудник') ? 'Привет' :
			(login == 'Директор') ? 'Здравствуйте' :
			(login == '') ? 'Нет логина' :
			'';