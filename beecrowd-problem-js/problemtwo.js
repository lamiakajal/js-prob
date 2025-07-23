// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var input = `10
9`;

var lines = input.split('\n');

const a = Number(lines[0]);
const b =Number(lines[1]);

console.log(`X = ${a+b}`);