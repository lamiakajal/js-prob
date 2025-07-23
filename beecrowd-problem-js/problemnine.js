// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input =`25
100
5.50`;
var lines = input.split('\n');

const employeeNumber = parseInt(lines[0]);
const hoursWorked = parseInt(lines[1]);
const hourlyRate = parseFloat(lines[2]);

const salary = hoursWorked * hourlyRate;

console.log("NUMBER = " + employeeNumber);
console.log("SALARY = U$ " + salary.toFixed(2));