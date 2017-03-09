/***********************************************/
/******* module to init template project *******/
/***********************************************/
'use strict'

const temp = require('../template.json');
const path = require('path');
const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const fs = require('fs');
const download = require('download-git-repo');

module.exports = ()=> {
	co(function *() {
		let proName = yield prompt(chalk.blue('Project name: '));
		let description = yield prompt(chalk.blue('Project description: '));
		let author = yield prompt(chalk.blue('Author: '));
		let gitUsr = yield prompt(chalk.blue('Git name: '));
		let repo = yield prompt(chalk.blue('Repository: '));
		let branch = yield prompt(chalk.blue('Branch: '));

		if (!temp[repo][branch]) {
			console.log(chalk.red('\n × No such template branch...'));
			process.exit();
		}

		console.log(chalk.blue('\n Generating...'));

		download(`${gitUsr}/${repo}#${branch}`, proName, {clone: true}, (err)=> {
			if (err) {
				console.log(chalk.red(err));
				process.exit();
			}

			let jsonPath = path.resolve(process.cwd(), `${proName}/package.json`);
			let packageJson = require(jsonPath);
			packageJson.name = proName;
			packageJson.author = author;
			packageJson.description = description;

			fs.writeFile(jsonPath, JSON.stringify(packageJson, null, 2), 'utf-8', (err)=> {
				if (err) {
					console.log(chalk.red('\n Modify package.json failed with error: '));
					console.log(chalk.red('\n ' + err));
				}
				process.exit();
			});

			console.log(chalk.green('\n √ Project has been completed init...'))
			console.log(chalk.gray(`\n $ cd ${proName}`))
			console.log(chalk.gray(`\n $ npm install`))
		});
	})
}