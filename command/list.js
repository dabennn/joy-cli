/***********************************************/
/*******  module to show template list   *******/
/***********************************************/
'use strict'

const temp = require('../template.json');
const show = require('../util/show');

module.exports = ()=> {
	show(temp);
}