"use strict";

// // let date = new Date(Date.parse("2012-02-20T03:12:00"));
// let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);
/****************************************************/

// // function	getWeekDay(date) {
// // 	let	dw = date.getDay();
// // 	switch (dw) {
// // 		case 0:
// // 			return "ВС";
// // 		case 1:
// // 			return "ПН";
// // 		case 2:
// // 			return "ВТ";
// // 		case 3:
// // 			return "СР";
// // 		case 4:
// // 			return "ЧТ";
// // 		case 5:
// // 			return "ПТ";
// // 		case 6:
// // 			return "СБ";
// // 		default:
// // 			return "unknown";
// // 	}
// // };

// function	getWeekDay(date) {
// 	let	daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

// 	return daysOfWeek[date.getDay()];
// };

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// console.log(getWeekDay(date));
/***********************************************/

// function	getLocalDay (date) {
// 	let	numOfDay = +date.getDay();

// 	return numOfDay == 0 ? 7 : numOfDay;
// };

// let date = new Date(2012, 0, 3);
// console.log(getLocalDay(date));
// // вс пн вт ср чт пт сб
// // 0  1  2  3  4  5  6
// // 7  1  2  3  4  5  6
/************************************************/

// function	getDateAgo(date, days) {
// 	let newdate = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
// 	return newdate.getDate();
// };

// let date = new Date(2015, 0, 2);

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
/***************************************************/

// function	getLastDayOfMonth(year, month) {
// 	let	tmp = new Date(year, +month + 1, 0);
// 	return tmp.getDate();
// };

// console.log(getLastDayOfMonth(2012, 1));
/****************************************************/

// function	getSecondsToday() {
// 	let	date = new Date();
// 	return date.getHours() * 60 * 60 + 
// 			date.getMinutes() * 60 + 
// 			date.getSeconds();
// };

// console.log(getSecondsToday());
/****************************************************/

// function	getSecondsToTomorrow() {
// 	let now = new Date()
// 	let	tomorrow = new Date(now.getFullYear(), 
// 							now.getMonth(), 
// 							now.getDate() + 1);
// 	let diff = tomorrow - now;
// 	return Math.round(diff / 1000);
// };

// console.log(getSecondsToTomorrow());
/****************************************************/

function	formatDate(date) {
	let	now = new Date();
	let diff = Math.floor(now - date) / 1000; //seconds

	if (diff < 1)
		return "прямо сейчас";
	else if (Math.floor(diff / 60) < 1)
		return `${diff} сек. назад`;
	else if (Math.floor(diff / (60 * 60)) < 1)
		return `${Math.floor(diff / 60)} мин. назад`;
	else
	{
		let	day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
		let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1);
		let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
		let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
		return `${day}.${month}.${date.getFullYear()} ${hours}:${minutes}`;
	}
};
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );