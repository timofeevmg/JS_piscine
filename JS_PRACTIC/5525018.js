'use strict';

function amountOfPages(summary){
	let numberString = '';
	let pageNumber;

	for (pageNumber = 1; numberString.length < summary; pageNumber++) {
		numberString += pageNumber.toString();
		if (numberString.length >= summary)
			break;
	}

	return pageNumber;
}
