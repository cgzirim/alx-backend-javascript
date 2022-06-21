export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const string = [];
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      string.push(item.replace(startString, ''));
    }
  });
  return string.join('-');
}
