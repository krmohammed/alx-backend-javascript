console.log('Welcome to ALX, what is your name?');


process.stdin.on('data', (data) => {
    console.log(`Your name is: ${data}`);
    process.exit();
})
