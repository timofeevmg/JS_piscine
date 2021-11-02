// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {

	const box = document.querySelector('.box');

	box.addEventListener('touchstart', (event) => {
		event.preventDefault();

		console.log('start');
		console.log(event.touches);
		console.log(event.targetTouches);
	});


	box.addEventListener('touchmove', (event) => {
		event.preventDefault();

		console.log(event.targetTouches[0].pageX);
	});

	box.addEventListener('touchend', (event) => {
		event.preventDefault();

		console.log('end');
	});
});

// touches - список всех пальцев, которые взаимодействуют с экраном
// targetTouches - список пальцев, взаимодействующих именно с этим элементом
// changedTouches - список пальцев, которые участвуют в текущем событии