"use strict";

// class Animal {
// 	constructor(name) {
// 		this.speed = 0;
// 		this.name = name;
// 	}

// 	run(speed) {
// 		this.speed = speed;
// 		console.log(`${this.name} run with speed ${this.speed}.`);
// 	}

// 	stop() {
// 		this.speed = 0;
// 		console.log(`${this.name} doesn\`t move.`);
// 	}
// }

// let animal = new Animal("My pet");


// class Rabbit extends Animal {
// 	constructor(name, earLength) {
// 		super(name);
// 		this.earLength = earLength;
// 	}

// 	hide() {
// 		console.log(`${this.name} is hidden!`);
// 	}

// 	stop() {
// 		this.speed = 0;
// 		super.stop();
// 		console.log(`${this.name} can\`t move fast.`);
// 	}
// }

// let rabbit = new Rabbit("White rabbit", 10);

/*************/
class Animal {
	constructor(name) {
	  this.name = name;
	}
  
  }
  
  class Rabbit extends Animal {
	constructor(name) {
	  super(name);
	  this.created = Date.now();
	}
  }
  
  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
  console.log(rabbit.name);

