'use strict'

module.exports = (obj)=> {
	let leftLen = [];
	let rightLen = [];
	let left;
	let total;

	for (let p in obj) {
		leftLen.push(p.length + 2);
		rightLen.push(obj[p].length + 2);
	}

	leftLen.sort((a, b)=> {
		return b - a;
	})

	rightLen.sort((a, b)=> {
		return b - a;
	});

	left = leftLen[0];
	total = left + rightLen[0] + 3;

	return [left, total];
}