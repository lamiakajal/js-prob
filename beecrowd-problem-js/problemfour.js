// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input =`30 
10`;
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);
const SOMA = A + B;

console.log("SOMA = " + SOMA);