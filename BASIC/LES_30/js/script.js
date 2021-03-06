/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const	adList = document.getElementsByClassName('promo__adv');
// adList[0].remove();
const adList = document.querySelectorAll('.promo__adv img');
adList.forEach(item => {									// adList.forEach(function (item){
	item.remove();											// 	item.remove();
});															// });


// const genreComedy = document.getElementsByClassName('promo__genre');
// genreComedy[0].innerHTML = 'ДРАМА';

// const bgImage = document.querySelector('.promo__bg');
// bgImage.style.background = "url('img/bg.jpg')";
const	poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre');

genre.textContent = 'драма';
poster.style.backgroundImage = "url('img/bg.jpg')";

// const moviesListSorted = [...movieDB.movies.sort()];
// console.log(moviesListSorted);
// const movieList = document.getElementsByClassName('promo__interactive-item');
// console.log(movieList);
// for (let i = 0; i < movieList.length; i++) {
// 	movieList[i].innerHTML = `${i + 1}. ${moviesListSorted[i]}\n                            <div class=\"delete\"></div>\n                        `;
// }
const	movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
	movieList.innerHTML += `
		<li class="promo__interactive-item">${i + 1}. ${film}
			<div class="delete"></div>
		</li>
	`;
});