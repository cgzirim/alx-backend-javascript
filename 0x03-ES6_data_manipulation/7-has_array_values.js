export default function hasValuesFromArray(set, array) {
  let boolean = false;
  for (const item of array) {
    boolean = set.has(item);
  }
  return boolean;
}
