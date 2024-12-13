const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to ALX, what is your name?');

rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
