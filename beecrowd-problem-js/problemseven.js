// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input =`5.0
6.0
7.0`;
var lines = input.split('\n');

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);

const MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;

console.log("MEDIA = " + MEDIA.toFixed(1));