"use strict";

// let	user = {
// 	name: "Василий Иванович",
// 	age: 35
// };

// let	str = JSON.stringify(user);

// let	user2 = JSON.parse(str);

// console.log(user);
// console.log(user2);
/**************************************/

let room = {
	number: 23
};

let meetup = {
	title: "Совещание",
	occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
	place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
	if (key == 'self' || (key == 'occupiedBy' && value == meetup))
		return undefined;
	else
		return value;
}));

/* в результате должно быть:
{
	"title":"Совещание",
	"occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
	"place":{"number":23}
}
*/
