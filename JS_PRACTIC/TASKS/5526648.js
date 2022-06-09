'use strict';

const funds = [
	{amount: -1400},
	{amount: 2400},
	{amount: -1000},
	{amount: 500},
	{amount: 10400},
	{amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
	return data
				.filter(fund => fund.amount > 0)
				.reduce((prev, curr) => prev + curr.amount, 0);
		
};

const getTotalIncomeAmount = (data) => {
	if (data.some(fund => fund.amount < 0)) {
		return data.reduce((prev, curr) => prev + curr.amount, 0);
	} else {
		return getPositiveIncomeAmount(data);
	}
};
