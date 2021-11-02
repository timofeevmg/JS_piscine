'use strict';

const str = 'test';
const arr = [1, 3, 5];

console.log(str.length); //4
console.log(arr.length); //3
console.log(str[3]); //t

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q'));

const logg = 'Каждый охотник желает знать...';

console.log(logg.slice(0, 6));
console.log(logg.slice(22));
console.log(logg.slice(-8));

console.log(logg.substring(0, 6));
console.log(logg.substr(1, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));