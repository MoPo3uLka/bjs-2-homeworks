"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let root1, root2;
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant > 0) {
		root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);

	} else if (discriminant === 0) {
		root1 = -b / (2 * a);
		arr.push(root1);

	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let p = parseInt(percent) / 100 / 12;
	if (isNaN(p) || p < 0) {
		return false;
	} else if (isNaN(contribution) || contribution < 0) {
		return false;
	} else if (isNaN(amount) || amount < 0) {
		return false;
	} else {
		let s = amount - contribution;
		let n = countMonths;
		let pay = s * (p + p / ((1 + p) ** n - 1));
		let totalAmount = (pay * n).toFixed(2);
		return Number(totalAmount);
	}
}