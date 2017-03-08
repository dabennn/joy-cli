'use strict'

const chalk = require('chalk');
const calc = require('../util/calc');
const transTable = require('../util/table');
const transTitle = require('../util/title');

module.exports = (data)=> {
	for (let p in data) {
		let result = calc(data[p]);
		let tableArr = transTable(data[p], result[0], result[1]);
		let len = tableArr.length;
		let title = transTitle(p, result[1]);

		console.log('\n' + chalk.blue(title));

		for (let i = 0; i < len; i++) {
			console.log(chalk.yellow(tableArr[i]));
		}
	}
}