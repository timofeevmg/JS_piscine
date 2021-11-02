'use strict';

// let num = 20;

// function showFirstMessage(text) {
// 	console.log(text);
// 	// let num = 10;
// 	console.log(num);
// }

// showFirstMessage('Прювет!');
// console.log(num);

// // console.log(calc(4, 3)); //
// // console.log(calc(5, 6)); //
// // console.log(calc(7, 8)); // функция работает ещё до того,
// 							// как была вызвана
// // function calc(a, b) {	//
// // 	return (a + b);			//
// // }						//

// function ret() {
// 	let num = 50;
// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() { //
// 	console.log('Ку!');		//
// }							// а здесь функция может быть вызвана
// 							// только после создания
// logger();					//

// const calc = (a, b) => { return (a + b)};	// стрелочная функция (стандарт ES6)
// console.log(calc(1, 2));					//

// ******************************
// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // покажет Pete

// ******************************
function makeWorker() {
	let name = "Pete";
  
	return function() {
	  console.log(name);
	};
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // покажет Pete