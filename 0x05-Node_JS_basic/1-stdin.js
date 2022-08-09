process.stdout.write('Welcome to Holberton School, what is you name?\n');

process.stdin.on('data', data => {
  if (data !== null) {
    process.stdout.write(`Your name is: ${data.toString()}\n`);
  }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
