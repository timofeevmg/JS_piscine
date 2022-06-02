'use static';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
	const {
		name,
    age,
    skills: {
        languages,
        programmingLangs: {
            js,
            php
        },
        exp
    }
	} = plan;

	return exp;
}

function showProgrammingLangs(plan) {
	let result = '';

	for (let key in plan) {
		if (typeof(plan[key] === 'object')) {
			let obj = plan[key];

			for (let i in obj) {
				if (i === 'programmingLangs') {
					let progLangs = obj[i];

					if (Object.keys(progLangs).length === 0) {
						return result;
					} else {
						for (let lang in progLangs) {
							result += `Язык ${lang} изучен на ${progLangs[lang]}\n`;
						}
					}
				}
			}
		}
	}
	return result;
}

personalPlanPeter.showAgeAndLangs = function(plan) {
	let result = '';

	const {
		name,
    age,
    skills: {
        languages,
        programmingLangs: {
            js,
            php
        },
        exp
    }
	} = plan;

	result += `Мне ${age} и я владею языками: `;

	if (languages.length !== 0) {
		for(let i = 0; i < languages.length - 1; i++) {
			result += `${languages[i].toUpperCase()} `;
		}
	}

	return result;
}
