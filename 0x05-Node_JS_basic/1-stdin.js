process.stdout.write('Welcome to Holberton School, what is you name?\n');

process.stdin.on('readable', () => {
  const string = process.stdin.read();
  if (string !== null) {
    process.stdout.write(`Your name is: ${string}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
