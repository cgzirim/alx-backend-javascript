export default function getResponseFromAPI() {
  // Returns a Promise
  return new Promise((resolve, reject) => {
    const a = 1 + 1;
    if (a === 2) {
      resolve('Success');
    } else {
      reject(Error('Failed'));
    }
  });
}
