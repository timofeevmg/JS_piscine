'use strict';

let a = 5,
	b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
	a: 5,
	b: 1
};

const copy = obj;// ссылка

copy.a = 10;

console.log(copy);
console.log(obj);

function copyTool(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
};

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copyTool(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
	d: 100,
	e: 1
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, numbers);
clone.d = 10;
clone.c.x = 0;
console.log(clone);
console.log(numbers);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[0] = 'x';
console.log(newArray);
console.log(oldArray);
console.log(...oldArray);//оператор spread

function logs(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [10, 100, 1000];

logs(...num);

const arr1 = ['abc', 'dfe', 'xyz'];
const arr2 = [...arr1];
console.log(arr2);

const obj1 = {
	a: 1,
	b: 2
};

const  obj2 = {...obj1};
console.log(obj2);