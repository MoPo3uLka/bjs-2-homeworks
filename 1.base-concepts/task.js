"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant > 0) {
		arr.push(((-b + Math.sqrt(discriminant)) / (2 * a)), ((-b - Math.sqrt(discriminant)) / (2 * a)));
	} else if (discriminant === 0) {
		arr.push(-b / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = parseInt(percent) / 100 / 12;
	let loanBody = amount - contribution;
	let pay = loanBody * (percent + percent / ((1 + percent) ** countMonths - 1));
	let totalAmount = (pay * countMonths).toFixed(2);

	return Number(totalAmount);
}