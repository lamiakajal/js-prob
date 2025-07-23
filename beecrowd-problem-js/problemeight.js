// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input =`5
6
7
8`;
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);
const C = parseInt(lines[2]);
const D = parseInt(lines[3]);

const DIFERENCA = (A * B) - (C * D);

console.log("DIFERENCA = " + DIFERENCA);