const fibonacci_obj=require('./fibonacci.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('enter the no of elements you want to print. ', (elements) => {
  fibonacci_obj.fibonacci(elements);

  rl.close();
});

