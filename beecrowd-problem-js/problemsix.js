// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input =`5.0
7.1`;
var lines = input.split('\n');

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);

const MEDIA = ((A * 3.5) + (B * 7.5)) / 11;

console.log("MEDIA = " + MEDIA.toFixed(5));