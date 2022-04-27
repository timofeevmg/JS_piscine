"use strict";

// class ValidationError extends Error {
// 	constructor(message) {
// 	  super(message);
// 	  this.name = "ValidationError";
// 	}
//   }
  
//   // Использование
//   function readUser(json) {
// 	let user = JSON.parse(json);
  
// 	if (!user.age) {
// 	  throw new ValidationError("Нет поля: age");
// 	}
// 	if (!user.name) {
// 	  throw new ValidationError("Нет поля: name");
// 	}
  
// 	return user;
//   }
  
//   // Рабочий пример с try..catch
  
//   try {
// 	let user = readUser('{ "age": 25 }');
//   } catch (err) {
// 	if (err instanceof ValidationError) {
// 	  alert("Некорректные данные: " + err.message); // Некорректные данные: Нет поля: name
// 	} else if (err instanceof SyntaxError) { // (*)
// 	  alert("JSON Ошибка Синтаксиса: " + err.message);
// 	} else {
// 	  throw err; // неизвестная ошибка, пробросить исключение (**)
// 	}
// }


/*****************/

class FormatError extends SyntaxError {
	constructor(message) {
		super(message);
		this.name = "FormatError";
	}
}

let err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)
