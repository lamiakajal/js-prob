// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input =`JOAO
500.00
1230.30`;
var lines = input.split('\n');

const name = lines[0];
const fixedSalary = parseFloat(lines[1]);
const totalSales = parseFloat(lines[2]);

const bonus = totalSales * 0.15;
const totalSalary = fixedSalary + bonus;

console.log("TOTAL = R$ " + totalSalary.toFixed(2));