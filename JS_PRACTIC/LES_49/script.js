"use strict";

const	log = function(a, b, ...rest) {
	console.log(a, b, rest);
};

log('text', 5, 'кое-что ещё', 12, '...', 55);


function	calcOrDouble(number, basis = 2) {
	// basis = basis || 2;//тк basis == undefined(aka false), если не будет передан как аргумент
	console.log(number * basis);
};

calcOrDouble(3, 5);
calcOrDouble(4);