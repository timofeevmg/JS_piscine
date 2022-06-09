'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

const students9 = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Sam'];

const students11 = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];

function sortStudentsByGroups(arr) {
	let sortedArr;
	let resultStr = 'Оставшиеся студенты:'
	let resultArr = [[], [], []];

	if (Array.isArray(arr))
		sortedArr = arr.sort();

	const groupsCount = 3;
	const studentsPerGroup = 3;
	let i = 0;
	let j = 0;
	while (i < groupsCount * studentsPerGroup) {
		resultArr[j].push(sortedArr[i]);
		if ((i + 1) % studentsPerGroup === 0)
			j++;
		i++;
	}

	if (i === arr.length) {
		resultStr += ' -';
	} else {
		while(i < arr.length) {
			resultStr += ` ${sortedArr[i]}`;
			if (i < arr.length - 1)
				resultStr += ',';
			i++;
		}
	}

	resultArr.push(resultStr);
	return resultArr;
}
