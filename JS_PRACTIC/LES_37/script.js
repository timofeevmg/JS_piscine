"use strict"

const	btns = document.querySelectorAll('button'),
		wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('red', 'one_more_class'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));


// console.log(btns[1].classList.add('red'));
// if (btns[1].classList.contains('red')) {
// 	console.log('red');
// }

btns[0].addEventListener('click', () => {
	// if (!btns[1].classList.contains('red')) {
	// 	btns[1].classList.add('red');
	// } else {
	// 	btns[1].classList.remove('red');
	// }

	btns[1].classList.toggle('red');
});

// console.log(btns[0].className);// метод устарел. выводит все классы одной строкой

wrapper.addEventListener('click', (event) => {
	// console.dir(event.target);
	if (event.target && event.target.tagName == "BUTTON") {	//не все элементы HTML поддерживают клик,
		console.log('click');								//поэтому event.target не будет существовать
	}
	if (event.target && event.target.matches('button.red')) {
		console.log('click red');
	}
	// if (event.target && event.target.classList.contains('blue')) {
	// 	console.log('click blue');
	// }
});

// btns.forEach(btn => {
// 	btn.addEventListener('click', () =>{
// 		console.log('alter');
// 	});
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);