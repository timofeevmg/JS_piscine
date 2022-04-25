"use strict";

class	User {
	constructor(name) { this.name = name; }
	sayHi() { console.log(this.name); }
}

// User("Sasha");
console.log(User);
console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype));
console.log(Object.getOwnPropertyDescriptors(User));

let user = new User("Ivan");

for (const property in user) {
	console.log(`property of user: ${property}`);
}

console.log(typeof user);
console.log(Object.getOwnPropertyDescriptors(user));


/**
 * clear functions
 */
function Car(name) {
	this.name = name;
}

Car.prototype.SayBiBi = function() {
	console.log(this.name);
}

console.log(Object.getOwnPropertyDescriptors(Car));

let car = new Car("BMW");
car.SayBiBi();
console.log(Car);
console.log(Object.getOwnPropertyDescriptors(car));

for (const property in car) {
	console.log(`property of car: ${property}`);
}

/**
 * class expression
 */

let Man = class {
	sayHi() {
		console.log("Hi");
	}
}

new Man().sayHi();

let Woman = class Wclass {
	sayHi() {
		console.log(Wclass);
	}
}

new Woman().sayHi();

// console.log(Wclass);

/**
 * dynamicly create class
 */
function makeClass(phrase) {
	return class {
		sayHi() {
			console.log("Hi");
		}
	}
}

	let Something = makeClass("bla-bla");

	new Something().sayHi();

/**
 * getters/setters
 */
class	Peer {
	constructor(name) {
		this.name = name;
	}

	get name() {
		return this._name;
	}

	set	name(word) {
		if (word.length < 4) {
			console.log("Name too short");
			return;
		} else {
			this._name = word;
		}
	}
}

let	peer = new Peer("Sasha");

console.log(peer);
console.log(peer.name);

peer.name = "Oleg";

console.log(peer);
console.log(peer.name);

peer = new Peer("Volodya");

console.log(peer);
console.log(peer.name);
