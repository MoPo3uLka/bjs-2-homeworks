function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

	let avg = sum / arr.length;
	avg = Number(avg.toFixed(2));

	return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
	let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let min = Math.min(...arr);
	let max = Math.max(...arr);

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0,
		sumOddElement = 0;

	for (let element of arr) {
		if (element % 2 === 0) {
			sumEvenElement += element;
		} else {
			sumOddElement += element;
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0,
		countEvenElement = 0;

	for (let element of arr) {
		if (element % 2 === 0) {
			sumEvenElement += element;
			countEvenElement++;
		}
	}

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let element of arrOfArr) {
		const maxFunctionResult = func(...element);

		if (maxFunctionResult > maxWorkerResult) {
			maxWorkerResult = maxFunctionResult;
		}
	}

	return maxWorkerResult;
}