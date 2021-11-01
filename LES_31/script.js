const btns = document.querySelectorAll('button');

// btn.onclick = function() {
// 	alert('Click!');
// };

// btn.onclick = function() {
// 	alert('Second Click!');
// };

let i = 0;
const deleteButtonOnClick = (e) => {
	console.log(e.target);
	// i++;
	// if (i == 1) {
	// 	btn.removeEventListener('click', deleteButtonOnClick);
};

btns.forEach(button => {
	button.addEventListener('click', deleteButtonOnClick, {once: true});
});



// btn.addEventListener('click', deleteButtonOnClick);

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
// 	event.preventDefault(); // запрет на стандартное поведение браузера

// 	console.log(event.target);
// });