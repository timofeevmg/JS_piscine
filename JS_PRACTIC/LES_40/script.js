"use strict"

// const	now = new Date();
// console.log(now.getTimezoneOffset());

const	start = new Date();

for (let i = 0; i < 100000; i++) {
	let num = i ** 3;
}

const	end = new Date();

alert(`Скрипт отработал за ${end - start} милилсекунд.`);