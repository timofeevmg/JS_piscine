'use strict';

const box = document.getElementById('box'); // один элемент страницы, тк id уникален

console.log(box);

const btns = document.getElementsByTagName('button'); // в btns получили не один элемент, а псевдомассив!

console.log(btns[0]); // первый элемент псевдомассива HTMLCollection

const circles = document.getElementsByClassName('circle'); // HTMLCollection

console.log(circles);

const hearts = document.querySelectorAll('.heart');

// console.log(hearts);
hearts.forEach(item => {
	console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);