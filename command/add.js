/***********************************************/
/*******     module to add template      *******/
/***********************************************/
'use strict'

const temp = require('../template.json');
const path = require('path');
const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const fs = require('fs');
const show = require('../util/show');

module.exports = ()=> {
	co(function *() {
		let repoName = yield prompt(chalk.blue('Repository name: '));
		let branch = yield prompt(chalk.blue('Branch: '));
		let desc = yield prompt(chalk.blue('Description: '));

		if (!temp[repoName][branch]) {
			temp[repoName][branch] = desc;
		} else {
			console.log(chalk.red('\n Template information has already existed'));
			process.exit();
		}

		fs.writeFile(path.resolve(__dirname, '../template.json'), JSON.stringify(temp, null, 2), 'utf-8', (err)=> {
			if (err) {
				console.log(chalk.red('\n Modify template with error: ' + err))
				process.exit();
			}

			console.log(chalk.green('\n √ Template successfully added !'))
			console.log(chalk.gray('\n Lastest template list is: \n'));
			show(temp);
			process.exit();
		})

	});
}