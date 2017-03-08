'use strict'

module.exports = (obj, left, total)=> {
	let consoleArr = [];
	let first_line = generateAsterisk(total);
	let second_line = '* branch' + generateSpace(left - 7) + '| description' + generateSpace(total - left - 15) + '*';
	let last_line = generateAsterisk(total);
	consoleArr.push(first_line,second_line,last_line);

//生成每一行数据，加入进数组
	for (let p in obj) {
		let lineStr = '* ' + p + generateSpace(left - p.length - 1) + '| ' + obj[p] + generateSpace(total - left - obj[p].length - 4) + '*';
		consoleArr.push(lineStr);
	}

	consoleArr.push(last_line);

	return consoleArr;
}

//用于生成指定长度的星号*字符串
function generateAsterisk(length) {
	return new Array(length + 1).join('*');
}
//用于生成指定长度的空格字符串
function generateSpace(length) {
	return new Array(length + 1).join(' ');
}