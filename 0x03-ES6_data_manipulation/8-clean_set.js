export default function cleanSet(set, startString) {
  const string = [];
  if (startString && typeof startString === 'string') {
    set.forEach((item) => {
      if (item.startsWith(startString)) {
        string.push(item.replace(startString, ''));
      }
    });
  }
  return string.join('-');
}
