"use strict";

function	User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log(`My name is ${this.name}.`)
	};
};

User.prototype.exit = function(name) {
	console.log(`${this.name} вышел.`)
};

const	ivan = new User('Ivan', 28),
		alex = new User('Alex', 20);

ivan.hello();
alex.hello();
ivan.exit();

console.log(ivan);
console.log(alex);