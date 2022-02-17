"use strict";

// function	f() {
// 	console.log("Hello!");
// }

// Function.prototype.defer = function(ms) {
// 	setTimeout(this, ms);
// }

// f.defer(1000)
/******************************************/

function	f(a, b) {
	console.log(a + b);
}

Function.prototype.defer = function(ms) {
	let ctx = this;
	return function(...args) {
		setTimeout(ctx, ms, ...args);
	}
}

f.defer(1000)(1, 2);
