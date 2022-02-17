"use strict";

let person = Object.create({
	calculateAge() { // прототип
		console.log('Age', new Date().getFullYear() - this.birthYear);
	}
},
	{
	name: {
		value: "Maksim",
		enumerable: true,	// *
		writable: true,		// **
		configurable: true,	// ***
	},
	birthYear: {
		value: 1985,
		writable: true,
	},
	age: {
		get() {
			return (new Date().getFullYear() - this.birthYear);
		},
		set(num) {
			this.birthYear = new Date().getFullYear() - num;
		},
	}
});

// let person = {
// 	name: "Maksim",
// 	birthYear: 1985,
// };

// person.name = "Ivan";	// **

for (let key in person) {
	if (person.hasOwnProperty(key)) { // exclude prototype (recommended with FOR...IN)
		console.log(key, person[key]);	// *
	}
};

// delete	person.name;	// ***, true

//console.log(person);
