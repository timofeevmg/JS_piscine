"use strict";

function	hello() {
	console.log('Hello', this)
}

const	person = {
	name: 'Karim',
	age: 7,
	sayHello: hello,
	sayHelloWindow: hello.bind(window),
	logInfo: function(job, phone) {
		console.group(`${this.name} info:`)
		console.log(`Name is ${this.name}`)
		console.log(`Age is ${this.age}`)
		console.log(`Job is ${job}`)
		console.log(`Phone is ${phone}`)
		console.groupEnd()
	}
}

const	lena = {
	name: 'Elena',
	age: 23
}

// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '+79001234567') // bind возвращает новую функцию
							// c предложенным контекстом
// fnLenaInfoLog()

// person.logInfo.call(lena, 'Frontend', '+79001234567')
person.logInfo.apply(lena, ['Frontend', '+79001234567'])
/*********************************************************/

const array = [1, 2, 3, 4, 5]

// function	multBy(arr, n) {
// 	return arr.map(function(i) {
// 		return i * n;
// 	})
// }

// console.log(multBy(array, 15))

Array.prototype.multBy = function(n) {
	return this.map(function(i) {
		return i * n;
	})
}

console.log(array.multBy(10))
