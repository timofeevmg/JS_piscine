'use strict';

const films = [
	{
		name: 'Titanic',
		rating: 9
	},
	{
		name: 'Die hard 5',
		rating: 5
	},
	{
		name: 'Matrix',
		rating: 8
	},
	{
		name: 'Some bad film',
		rating: 4
	}
];

function showGoodFilms(arr) {
	return arr.filter(film => film.rating >= 8);
}

function showListOfFilms(arr) {
	return arr.reduce((prev, curr, index) => {
		return (index > 1 ? `${prev}, ${curr.name}` : `${prev.name}, ${curr.name}`);
	});
}

function setFilmsIds(arr) {
	return arr.map( (film, index) => {
		film.id = index;
		return film;
	});
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
	return arr.every(film => 'id' in film);
}
