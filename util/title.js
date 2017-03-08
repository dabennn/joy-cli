'use strict'

module.exports = (p, total)=> {
	let title = '< Repository -- ' + p + ' >';

	let len = title.length;
	let indent;

	if ((total - len) % 2 === 0) {
		indent = (total - len) / 2;
	} else {
		indent = (total - len - 1) / 2
	}

	title = new Array(indent + 1).join(' ') + title;

	return title;
}