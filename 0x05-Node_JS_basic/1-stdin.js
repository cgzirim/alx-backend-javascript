console.log('Welcome to Holberton School, what is you name?');

process.stdin.on('data', data => {
  if (data !== null) {
    console.log(`Your name is: ${data.toString()}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
