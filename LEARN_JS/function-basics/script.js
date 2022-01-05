"use strict";

// function checkAge(age) {
// 	return (age > 18) ? true : confirm('Родители разрешили?');
// };

// function checkAge(age) {
// 	return (age > 18) || confirm('Родители разрешили?');
// };

// function min(a,b) {
// 	return (a < b) ? a : b;
// };

function pow(x,n) {
	if (n < 1) {
		return ("Степень n="+`${n}`+" не поддерживается!");
	}
	for (let i = 2; i <= n; ++i) {
		x *= x;
	};
	return x;
};

alert(pow(+prompt("x:"), +prompt("n:")));