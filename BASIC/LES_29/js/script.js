'use strict';

const	box = document.getElementById('box'),
		btns = document.getElementsByTagName('button'),
		circles = document.getElementsByClassName('circle'),
		wrapper = document.querySelector('.wrapper'),
		hearts = wrapper.querySelectorAll('.heart'),
		oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

let num = 300;
box.style.cssText = `background-color: yellow; width: ${num}px`;

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'pink';
// }

hearts.forEach(item => {
	item.style.backgroundColor = 'pink';
});

const div = document.createElement('div');
// const text = document.createTextNode('Here I am!');

div.classList.add('black');

// document.body.append(div); // в странице в конце тега body ставим созданный объект
// wrapper.appendChild(div);

wrapper.append(div); // в конце тега wrapper
// wrapper.prepend(div); // в начало тега wrapper

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<h1>Black Coffee</h1>';

// div.textContent = 'Black Coffee'; //безопаснее!

div.insertAdjacentHTML('afterbegin','<h2>Black Coffee</h2>');