"use strict";

// let calculator = {
// 	read() {
// 		this.x = +prompt( "x:", 0 );
// 		this.y = +prompt( "y:", 0 );
// 	},

// 	sum() {
// 		return ( this.x + this.y );
// 	},

// 	mul() {
// 		return ( this.x * this.y );
// 	}
// };

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );


let	ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep() {
		alert( this.step );
		return this;
	}
};

ladder
	.up()
	.up()
	.down()
	.showStep();