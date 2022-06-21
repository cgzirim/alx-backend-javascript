export default function cleanSet(set, startString) {
  let string = '';
  const array = [];

  if (startString && typeof startString === 'string') {
    set.forEach((item) => {
      if (item.startsWith(startString)) {
        array.push(item.replace(startString, ''));
      }
    });
    string = array.join('-');
  }
  return string;
}
