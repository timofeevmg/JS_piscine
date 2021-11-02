/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


'use strict';

const personalMovieDB = {
	count: 0,
	movies : {},
	actors : {},
	genres : [],
	privat : false,
	start: function () {
		this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (this.count == '' || this.count	== null || isNaN(this.count) || this.count < 0) {
			this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const lastMovieSeen = prompt('Один из последних просмотренных фильмов?', '');
			if (lastMovieSeen == null || lastMovieSeen == "" || lastMovieSeen.length > 50) {
				i--;
				continue;
			};
			const lastMovieRate = +prompt('На сколько оцените его?', '');
			this.movies[lastMovieSeen] = lastMovieRate;
		}
	},
		writeYourGenres: function() {
		for (let i = 0; i < 1; i++) {
			let genresInput = prompt('Введите ваши любимые жанры через запятую:').toLowerCase();
			if (genresInput === '' || genresInput === null) {
				i--;
			} else {
				this.genres = genresInput.split(',');
				this.genres.sort();
			}
		}
		this.genres.forEach((item, i) => {
			console.log(`Любимый жанр #${i + 1} - это ${item}`);
		});
	},
	// writeYourGenres: function() {
	// 	for (let i = 0; i < 3; i++) {
	// 		this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
	// 		if (this.genres[i] == '' || this.genres[i] == null) {
	// 			i--;
	// 			continue;
	// 		}
	// 	}
	// 	this.genres.forEach((item, i) => {
	// 		console.log(`Любимый жанр #${i + 1} - это ${item}`);
	// 	});
	// },
	detectPersonalLevel: function() {
		if (this.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (this.count >= 10 && this.count <= 30) {
			console.log("Вы классический зритель");
		} else if (this.count > 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},
	toggleVisibleMyDB: function () {
		if (!this.privat) {
			this.privat = true;
		} else {
			this.privat = false;
		}
	},
	showMyDB: function() {
		if (this.privat == false) {
			console.log(this);
		}
	}
};
