"use strict";

function	Car(type) {
	this.type = type;

	console.log('Car: ' + `${this.type}`);
}

// Car.prototype = { // (*)
// 	diesel: false,
// };

let bmw = new Car('BMW');

let audi = new bmw.constructor('AUDI');	// не сработает при смене прототипа в (*),
											// т.к. нет такого конструктора
