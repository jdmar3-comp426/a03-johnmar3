/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
<<<<<<< HEAD
    return `${a} + ${b} = ${a + b}`
=======
	return `${a} + ${b} = ${a + b}`
>>>>>>> 33fae5841424807e5720881553a8e1deabf16808
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
<<<<<<< HEAD
    let array = [];
    for (let i = startNumber; i <= endNumber; i++) {
        array.push(i);
    }
    return array;
=======
	let array = [];
	for (let i = startNumber; i <= endNumber; i++) {
		array.push(i);
	}
	return array;
>>>>>>> 33fae5841424807e5720881553a8e1deabf16808
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
<<<<<<< HEAD
    return {
        max: Math.max(...numbers),
        min: Math.min(...numbers)
    }
=======
	return {
		max: Math.max(...numbers),
		min: Math.min(...numbers)
	}
>>>>>>> 33fae5841424807e5720881553a8e1deabf16808
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
<<<<<<< HEAD
    let counter = {};
    array.forEach(item => {
        if (counter[item]) {
            counter[item]++;
        } else {
            counter[item] = 1;
        }
    });
    return counter;
=======
	let counter = {};
	array.forEach(item => {
		if (counter[item]) {
			counter[item]++;
		} else {
			counter[item] = 1;
		}
	});
	return counter;
>>>>>>> 33fae5841424807e5720881553a8e1deabf16808
}
