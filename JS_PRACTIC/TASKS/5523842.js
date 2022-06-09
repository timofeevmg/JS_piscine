'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    const mallDataKeys = Object.keys(data);
	let shopsArr;
	let shopsHeight;
	let heatingCost1m3;
	let budget;

	if (mallDataKeys.length === 0) {
		return;
	} else {
		for(let key in mallDataKeys) {
			switch (mallDataKeys[key]) {
				case 'shops':
					shopsArr = data[mallDataKeys[key]];
					break;
				case 'height':
					shopsHeight = data[mallDataKeys[key]];
					break;
				case 'moneyPer1m3':
					heatingCost1m3 = data[mallDataKeys[key]];
					break;
				case 'budget':
					budget = data[mallDataKeys[key]];
					break;
				default:
					return;
			}
		}
	}

	const shopsVolume = getShopsVolume(shopsArr, shopsHeight);
	
	if (!shopsVolume) {
		return;
	} else {
		return (budget >= shopsVolume * heatingCost1m3 ? 'Бюджета достаточно' : 'Бюджета недостаточно');
	}
}

const getShopsVolume = (shopsArr, height) => {
	let area = 0;
	let volume = 0;

	if (Array.isArray(shopsArr) && shopsArr.length) {
		shopsArr.forEach(shop => {
			area += shop.width * shop.length;
		});
		volume = area * height;
	}

	return volume;
}
