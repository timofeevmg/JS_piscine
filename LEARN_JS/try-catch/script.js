"use strict";

// try {
// 	lalala; // ошибка, переменная не определена!
//   } catch(err) {
// 	console.log(err.name); // ReferenceError
// 	console.log(err.message); // lalala is not defined
// 	console.log(err.stack); // ReferenceError: lalala is not defined at (...стек вызовов)
  
// 	// Можем также просто вывести ошибку целиком
// 	// Ошибка приводится к строке вида "name: message"
// 	console.log(err); // ReferenceError: lalala is not defined
// }


/********************/

let json = "{ некорректный JSON }";

try {

  let user = JSON.parse(json); // <-- тут возникает ошибка...
  alert( user.name ); // не сработает

} catch (e) {
  // ...выполнение прыгает сюда
  alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
  alert( e.name );
  alert( e.message );
}


/***********************/

let error = new Error(message);
// или
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...


/***********************/

let json = '{ "age": 30 }'; // данные неполны

try {

  let user = JSON.parse(json); // <-- выполнится без ошибок

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени"); // (*)
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
}


/*****************/

try {
	alert( 'try' );
	if (confirm('Сгенерировать ошибку?')) BAD_CODE();
  } catch (e) {
	alert( 'catch' );
  } finally {
	alert( 'finally' );
  }