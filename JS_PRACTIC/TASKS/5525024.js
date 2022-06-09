'use strict';

function isPangram(string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';

	let charsSet = new Set([...string.toLowerCase()]);

	let lettersSet = '';

	charsSet.forEach(letter => {
		if (letter !== ' ') {
			lettersSet += letter;
		}
	});

	return (alphabet.length === lettersSet.length ? true : false);
}
