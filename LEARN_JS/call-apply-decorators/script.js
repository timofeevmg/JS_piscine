"use strict";

// function	spy(func) {
// 	function	wrapper(...args) {
// 		wrapper.calls.push(args)
// 		func.apply(this, arguments)
// 	}
// 	wrapper.calls = []
// 	return wrapper
// }

// function work(a, b) {
// 	console.log( a + b ); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
// 	console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }
/*****************************************************************/

// function	f(x) {
// 	console.log(x)
// }

// function	delay(f, ms) {
// 	return function() {
// 		setTimeout(() => f.apply(this, arguments), ms)
// 	}
// }

// let	f1000 = delay(f, 1000)
// let f1500 = delay(f, 1500)

// f1000('test1000')
// f1500('test1500')
/****************************************************************/

// function	debounce(func, ms) {
// 	let isWait = false;
// 	return function() {
// 		if (isWait)
// 			return ;
		
// 		func.apply(this, arguments)

// 		isWait = true

// 		setTimeout(() => isWait = false, ms)
// 	}
// }

// let	f = debounce(console.log, 1000)

// f(1)
// f(2)

// setTimeout( () => f(3), 100)
// setTimeout( () => f(4), 1100)
// setTimeout( () => f(5), 1500)
/***************************************************************/

function	f(a) {
	console.log(a);
}

function	throttle(f, ms) {
	let	isWait = false;
	let	tmpArgs;
	let	tmpThis;

	return function() {
		if (isWait) {
			tmpArgs = arguments;
			tmpThis = this;
			return ;
		}

		f.apply(this, arguments);

		isWait = true;

		setTimeout(function() {
			isWait = false;
			f.apply(tmpThis, tmpArgs);
		}, ms);
	}
}

let	f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
