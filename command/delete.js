/***********************************************/
/******  module to delete template item  *******/
/***********************************************/
'use strict'

const temp = require('../template.json');
const fs = require('fs');
const path = require('path');
const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const show = require('../util/show');

module.exports = ()=> {
	co(function *() {
		let repo = yield prompt(chalk.blue('The repository you want to choice: '))
		let branch = yield prompt(chalk.blue('The branch you want to delete: '));
		let sure = yield prompt(chalk.red('Are you sure?(yes or no)'));

		if(sure === 'yes' || sure === 'y'){
			if (temp[repo][branch]) {
				delete temp[repo][branch];
			}else{
				console.log(chalk.red('\nNo such branch to remove..'));
				process.exit();
			}
			fs.writeFile(path.resolve(__dirname, '../template.json'), JSON.stringify(temp), 'utf-8', (err)=> {
				if (err) {
					console.log('\n Fail to modify template with: ' + chalk.red(err));
					process.exit();
				}

				console.log(chalk.green('\nBranch < '+branch+' > has been removed!'));
				console.log(chalk.gray('Lastest template list is: \n'));
				show(temp);

				process.exit();
			})
		}else{
			process.exit();
		}
	})
}