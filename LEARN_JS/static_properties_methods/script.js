"use strict";

// class Rabbit {
// 	constructor(name) {
// 	  this.name = name;
// 	}
//   }
  
//   let rabbit = new Rabbit("Rab");
  
//   // метод hasOwnProperty от Object.prototype
//   console.log( rabbit.hasOwnProperty('name') ); // true


class Rabbit extends Object {
	constructor(name) {
		super();
		this.name = name;
	}
  }
  
  let rabbit = new Rabbit("Кроль");
  
  console.log( rabbit.hasOwnProperty('name') ); // Ошибка